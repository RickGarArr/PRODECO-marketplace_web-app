import { Directive, EventEmitter, ElementRef, HostListener, Input, Output } from '@angular/core';
import { FileItem } from '../models/file-item';

@Directive({
  selector: '[appNgDropFiles]'
})
export class NgDropFilesDirective {

  @Input() archivos: FileItem[] = [];
  @Output() mouseSobre: EventEmitter<boolean> = new EventEmitter();

  constructor( ) { }

  @HostListener('dragover', ['$event']) public onDragEnter(event: any): void {
    this.mouseSobre.emit(true);
    this._prevenirDetener( event );
  }

  @HostListener('dragleave', ['$event']) public onDragLeave(event: any): void {
    this.mouseSobre.emit(false);
  }

  @HostListener('drop', ['$event']) public onDrop(event: any): void {
    const transferencia = this._getTransferencia( event );

    if (!transferencia) {
      return;
    }

    this._extraerArchivos(transferencia.files);
    this._prevenirDetener( event );
    this.mouseSobre.emit(false);
  }

  private _getTransferencia( event ): any {
    return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer;
  }

  private _extraerArchivos(archivosLista: FileList): void {
    for (const propiedad in Object.getOwnPropertyNames(archivosLista)) {
      if (Object.getOwnPropertyNames(archivosLista).length) {
        const archivoTemporal = archivosLista[propiedad];
        if (this._puedeSerCargado(archivoTemporal)) {
          const nuevoArchivo = new FileItem(archivoTemporal);
          this.archivos.push(nuevoArchivo);
        }
      }
    }
    console.log(this.archivos);
  }

  // validaciones
  private _puedeSerCargado( archivo: File): boolean {
    if ( !this._archivoFueDroppeado(archivo.name) && this._esImagen(archivo.type)){
      return true;
    } else {
      return false;
    }
  }

  private _prevenirDetener( event: Event ): void {
    event.preventDefault();
    event.stopPropagation();
  }

  private _archivoFueDroppeado( nombreArchivo: string ): boolean {
    for ( const archivo of this.archivos) {
      if ( archivo.archivo.name === nombreArchivo ){
        return true;
      }
    }
    return false;
  }

  private _esImagen( tipoArchivo: string): boolean {
    return (tipoArchivo === '' || tipoArchivo === undefined) ? false : tipoArchivo.startsWith('image');
  }

}
