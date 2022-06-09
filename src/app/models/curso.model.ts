export interface curso{
    id: string;
    nombre: string;
    fecha_inicio: string;
    fecha_fin: string;
}

export interface createCursoDTO {
    nombre: string;
    fecha_inicio: string;
    fecha_fin: string;
}

export interface updateCurso extends Partial<createCursoDTO>{ 
}