import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IntructoresService } from 'src/app/services/intructores.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  instructores: any = [];
  @Output() enviarInstructor = new EventEmitter();
  @Output() enviarRegion = new EventEmitter();
  @Output() retornarIndex = new EventEmitter();


  constructor(private instructorService: IntructoresService) { }

  mostrarMenu:boolean = false;
  nombreClase:any;
  instructor: any = {
    nombre: '',
    correo: '',
    imagen: ''
  }
  idInstructor:any;

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
  ];

  formularioInstructor = new FormGroup({
    nombre: new FormControl(),
    correo: new FormControl(),
    imagen: new FormControl(),
  });

  formularioClase = new FormGroup({
    nombreClase: new FormControl(),
    codigo: new FormControl(),
    seccion: new FormControl(),
    descripcion: new FormControl()
  });

  ngOnInit(): void {

    this.obtenerInstructores();

  }

  agregarInstructor(){
    this.instructorService.agregarInstructores(this.formularioInstructor.value).subscribe((data:any)=>{
      this.obtenerInstructores();
      console.log(data)
    });
  }


  crearClase(){
    this.instructorService.agregarClase(this.idInstructor, this.formularioClase.value).subscribe((data:any)=>{
      console.log(data);
      this.enviarInstructor.emit(this.idInstructor);
    })
  }


  seleccionarRegion(region:any){
    this.enviarRegion.emit(region);
  }
  
  obtenerInstructores(){
    this.instructorService.obtenerInstructores().subscribe((data:any)=>{
      console.log(data);
      this.instructores = data;
    });
  }


  seleccionarInstructor(id:any){
    console.log('ID desde el hijo', id);
    this.idInstructor = id;
    this.enviarInstructor.emit(id);

    this.instructores.forEach((item:any) => {
      if(id=== item._id){
        this.instructor = item;
      }
    });
  }

}
