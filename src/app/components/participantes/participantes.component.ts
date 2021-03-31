import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IntructoresService } from 'src/app/services/intructores.service';

@Component({
  selector: 'app-participantes',
  templateUrl: './participantes.component.html',
  styleUrls: ['./participantes.component.css']
})
export class ParticipantesComponent implements OnInit {

  constructor(private instructorService: IntructoresService) { }
  participantes: any = [];
  idInstructor: any;
  idClase:any;

  instructor: any = {
    nombre: '',
    imagen: ''
  };

  imagenes = [
    { nombre_p: 'bulma', imagen: 'bulma.jpg' },
    { nombre_p: 'baby', imagen: 'baby.jpg' },
    { nombre_p: 'cell', imagen: 'cell.jpg' },
    { nombre_p: 'chaozu', imagen: 'chaozu.jpg' },
    { nombre_p: 'dende', imagen: 'dende.jpg' },
    { nombre_p: 'dodoria', imagen: 'dodoria.jpg' },
    { nombre_p: 'honors', imagen: 'Honors.jpg' },
    { nombre_p: 'patricio', imagen: 'patricio.jpg' },
    { nombre_p: 'puar', imagen: 'puar.jpg' },
    { nombre_p: 'vegeta', imagen: 'vegeta.jpg' },
  ]

  formularioParticipantes = new FormGroup({
    nombre: new FormControl(),
    correo: new FormControl(),
    imagen: new FormControl(),
  });

  ngOnInit(): void {
  }

  agregarParticipante(){
    this.instructorService.agregarParticipantes(this.idInstructor, this.idClase, this.formularioParticipantes.value).subscribe((res:any)=>{
      console.log(res);
      this.obtenerParticipantes(this.idInstructor, this.idClase);
    });
  }

  obtenerInstructor(){
    this.instructorService.obtenerClases(this.idInstructor).subscribe((data:any)=>{
      console.log('instructor');
      this.instructor.nombre = data.nombre;
      this.instructor.imagen = data.imagen;

    });
  }

  obtenerParticipantes(idInstructor: any, idClase: any) {
    this.idClase = idClase;
    this.idInstructor = idInstructor;

    this.instructorService.obtenerParticipantes(idInstructor, idClase).subscribe((data: any) => {
      this.participantes = data;
      console.log(data)
    });

    this.obtenerInstructor();


  }

}
