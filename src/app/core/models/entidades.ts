export interface Contrato {
  id: string;
  codigo: string;
  descripcion: string;
  fechaInicio: string;
  estado: string;
}

export interface Contratista {
  id: string;
  nombre: string;
  cuit: string;
  contactoNombre: string;
  contactoTelefono: string;
}

export interface Personal {
  id: string;
  contratistaId: string;
  nombreCompleto: string;
  dni: string;
  rol: string;
}

export interface Transporte {
  id: string;
  contratistaId: string;
  patente: string;
  tipo: string;
  capacidad: string;
}

export interface Maquinaria {
  id: string;
  contratistaId: string;
  equipo: string;
  modelo: string;
  horasUso: number;
}

export interface Database {
  contratos: Contrato[];
  contratistas: Contratista[];
  personal: Personal[];
  transporte: Transporte[];
  maquinaria: Maquinaria[];
}