import { Component, OnInit } from '@angular/core';
import{curso, updateCurso} from '../../models/curso.model';
import{CursosService} from '../../services/cursos.service';

@Component({
  selector: 'app-cursos-list',
  templateUrl: './cursos-list.component.html',
  styleUrls: ['./cursos-list.component.scss']
})
export class CursosListComponent implements OnInit {

  cursos: curso[] = [];
  cursoEditar = false;
  cursoEditando:curso = {
    id: "-9999",
    nombre: "nombre",
    fecha_inicio: "Fecha de inicio: 9999-99-99",
    fecha_fin: "Fecha de inicio: 9999-99-99"
  };
  /*
    [
    {
      id: "1",
      nombre: 'Curso 1',
      fecha_inicio: 'Fecha de inicio: 2005-12-01',
      fecha_fin: 'Fecha de fin: 2005-12-01'
    },
    {
      id: "2",
      nombre: 'Curso 2',
      fecha_inicio: 'Fecha de inicio: 2005-12-01',
      fecha_fin: 'Fecha de fin: 2005-12-01'
    },
    {
      id: "3",
      nombre: 'Curso 5',
      fecha_inicio: 'Fecha de inicio: 2005-12-01',
      fecha_fin: 'Fecha de fin: 2005-12-01'
    },
    {
      id: "4",
      nombre: 'Curso 4',
      fecha_inicio: 'Fecha de inicio: 2005-12-01',
      fecha_fin: 'Fecha de fin: 2005-12-01'
    },
    {
      id: "5",
      nombre: 'Curso 5',
      fecha_inicio: 'Fecha de inicio: 2005-12-01',
      fecha_fin: 'Fecha de fin: 2005-12-01'
    },

  ]
  */

  constructor(
    private cursosService:CursosService
  ) { }

  ngOnInit(): void {
      this.cursosService.getAllCursos().subscribe(data=>{
        this.cursos = data;
    });
  }

  openPopupEditarCurso(){
    this.cursoEditar = !this.cursoEditar;
  }

  saveEditarCurso(nombreEditado:string, fechaIEditada:string, fechaFEditada:string){
    const dtoUpdate:updateCurso ={
      nombre:nombreEditado,
      fecha_inicio:fechaIEditada,
      fecha_fin:fechaFEditada
    }
    this.cursosService.updateCurso(this.cursoEditando.id, dtoUpdate).subscribe(data=>{
      console.log(data);
      const cursoId = this.cursos.findIndex(item=>item.id==this.cursoEditando.id);
      this.cursos[cursoId] = data;
    });
    this.openPopupEditarCurso();
    //Update
  }

  onEditarCurso(id:string){
    this.cursosService.getCursoById(id).subscribe(
      data =>{
        console.log('Detalle de mi producto:',data);
        this.openPopupEditarCurso();
        this.cursoEditando = data;
      }
    );
  }

  cursoCreado(objCreado:curso){
    this.cursos.push(objCreado);
    alert("Curso creado! Revisa el último de los cursos");
  }

  eliminarProducto(){
    this.cursosService.deleteCurso(this.cursoEditando.id).subscribe(data=>{
      console.log(data);
      const cursoId = this.cursos.findIndex(item=>item.id==this.cursoEditando.id);
      this.cursos.splice(cursoId,1);
      this.openPopupEditarCurso();
    });
  }

}
