export interface Empresa {
  nombreEmpresa: string;
  rfc: string;
  correoPrincipal: string;
  telefono: string;
  whatsapp: string;
  domicilio: Domicilio;
}

export interface Domicilio {
  calle: string;
  numero: string;
  cp: string;
  colonia: string;
  ciudad: string;
}

export interface Categoria {
  id: string;
  name: string;
}

