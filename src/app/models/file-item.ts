export class FileItem {

    public archivo: File;

    public url: string;
    public subiendo: boolean;
    public progreso: number;

    constructor( archivo: File) {

        this.archivo = archivo;

        this.subiendo = false;
        this.progreso = 0;
    }
}

export class Archivo {
    public archivo: File;
    public url: string;

    constructor( archivo: File) {
        this.archivo = archivo;
    }
}
