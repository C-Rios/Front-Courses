import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import {CursosService} from '../../services/cursos.service'
import {curso, createCursoDTO} from '../../models/curso.model';

@Component({
  selector: 'app-add-curso',
  templateUrl: './add-curso.component.html',
  styleUrls: ['./add-curso.component.scss']
})
export class AddCursoComponent implements OnInit {

  nombre = "";
  fecha_inicio = "";
  fecha_fin ="";

  @Output() crearCurso = new EventEmitter<curso>();

  constructor(
    private cursoService:CursosService
  ) { }

  ngOnInit(): void {
  }

  guardarCurso(nombre:string, fecha_inicio:string, fecha_fin:string){
    this.nombre = nombre;
    this.fecha_inicio = fecha_inicio;
    this.fecha_fin = fecha_fin;

    const curso:createCursoDTO ={
      nombre: this.nombre,
      fecha_inicio: this.fecha_inicio,
      fecha_fin: this.fecha_fin
    };

    this.cursoService.createCurso(curso).subscribe(data => {
      console.log(data);
      this.crearCurso.emit(data);
    });
    //Hacer la peticion
  }

}
