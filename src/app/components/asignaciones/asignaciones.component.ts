import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IntructoresService } from 'src/app/services/intructores.service';

@Component({
  selector: 'app-asignaciones',
  templateUrl: './asignaciones.component.html',
  styleUrls: ['./asignaciones.component.css']
})
export class AsignacionesComponent implements OnInit {

  idInstructor: any;
  idClase: any;
  asignaciones: any = [];

  formularioAsignaciones = new FormGroup({
    nombre: new FormControl(),
    descripcion: new FormControl(),
    fecha_limite: new FormControl(),
  });

  constructor(private instructorService: IntructoresService) { }

  ngOnInit(): void {
  }

  agregarAsignacion(){
    this.instructorService.agregarAsignaciones(this.idInstructor, this.idClase, this.formularioAsignaciones.value).subscribe((res:any)=>{
      console.log(res);
      this.obtenerAsignaciones(this.idInstructor,this.idClase);
    });
  }

  obtenerAsignaciones(idInstructor: any, idClase: any) {
    console.log('asignaciones')
    this.idInstructor = idInstructor;
    this.idClase = idClase;


    this.instructorService.obtenerAsignaciones(this.idInstructor, this.idClase).subscribe(((data: any) => {
      this.asignaciones = data;
      console.log(data)
    }));


  }

}
