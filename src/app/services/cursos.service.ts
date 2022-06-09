import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import{ curso, createCursoDTO, updateCurso} from '../models/curso.model';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private myUrl ="http://127.0.0.1:8000/api/v1/cursos";

  constructor(
    private http: HttpClient
  ) { }

  getAllCursos(){
    return this.http.get<curso[]>(this.myUrl);
  }

  getCursoById(id:string){
    return this.http.get<curso>(this.myUrl+"/"+id);
  }

  createCurso(data: createCursoDTO){
    return this.http.post<curso>(this.myUrl, data);
  }

  updateCurso(id:string, dto:updateCurso){
    return this.http.put<curso>(this.myUrl+"/"+id, dto);
  }

  deleteCurso(id:string){
    return this.http.delete(this.myUrl+"/"+id);
  }
}
