import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {curso} from '../../models/curso.model'

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss']
})
export class CursoComponent implements OnInit {

  @Input("myCurso") myCurso: curso = {
    id: "-9999",
    nombre: "nombre",
    fecha_inicio: "Fecha de inicio: 9999-99-99",
    fecha_fin: "Fecha de inicio: 9999-99-99"
  };

  @Output() cursoEditar = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  editarCurso(){
    this.cursoEditar.emit(this.myCurso.id);
    console.log("Editando curso", this.myCurso.id);
  }

}
