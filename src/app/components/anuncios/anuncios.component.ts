import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IntructoresService } from 'src/app/services/intructores.service';

@Component({
  selector: 'app-anuncios',
  templateUrl: './anuncios.component.html',
  styleUrls: ['./anuncios.component.css']
})
export class AnunciosComponent implements OnInit {

  anuncios: any = [];
  clase: any = {}
  idIstructor: any;
  idClase: any;
  instructor: any = {
    nombre: '',
    imagen: ''
  };

  formularioAnuncio = new FormGroup({
    mensaje: new FormControl()
  });

  constructor(private instructorService: IntructoresService) { }

  ngOnInit(): void {


  }

  agregarAnuncio(){
    console.log(this.formularioAnuncio.value);

    this.instructorService.agregarAnuncio(this.idIstructor, this.idClase, this.formularioAnuncio.value).subscribe((data:any)=>{
      if(data){
        this.obtenerAnuncios(this.idIstructor, this.idClase);
      }
    });

  }

  obtenerAnuncios(idInstructor: any, idClase: any) {

    this.idIstructor = idInstructor;
    this.idClase = idClase;

    this.instructorService.obtenerAnuncios(idInstructor, idClase).subscribe((data: any) => {
      console.log(data);
      this.anuncios = data;
    });

    this.obtenerInformacionClase();

  }

  obtenerInformacionClase() {
    this.instructorService.obtenerClases(this.idIstructor).subscribe((data: any) => {
      console.clear();
      console.log('Clases :', data);


      this.instructor.nombre = data.nombre;
      this.instructor.imagen = data.imagen;


      data.clases.forEach((item: any) => {
        if (item._id === this.idClase) {
          this.clase = item;
        }
      });
    });
  }

}
