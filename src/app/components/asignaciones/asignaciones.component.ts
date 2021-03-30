import { Component, OnInit } from '@angular/core';
import { IntructoresService } from 'src/app/services/intructores.service';

@Component({
  selector: 'app-asignaciones',
  templateUrl: './asignaciones.component.html',
  styleUrls: ['./asignaciones.component.css']
})
export class AsignacionesComponent implements OnInit {

  idInstructor:any;
  idClase:any;
  asignaciones:any = [];

  constructor( private instructorService: IntructoresService ) { }

  ngOnInit(): void {
  }

  obtenerAsignaciones(idInstructor:any, idClase:any){
    console.log('asignaciones')
    this.idInstructor = idInstructor;
    this.idClase = idClase;
    

    this.instructorService.obtenerAsignaciones(this.idInstructor, this.idClase).subscribe(((data:any)=>{
      this.asignaciones = data;
      console.log(data)
    }));


  }

}
