export interface Paciente{
  id: number;
  fechaCreacion ?:string;
  fechaActualizacion ?: string;
  nombre: string;
  apellido: string;
  fechaNacimiento ?: string;
  direccion ?: string;
  fotoHashCode ?: number;
}
