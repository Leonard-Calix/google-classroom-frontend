import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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

  ngOnInit(): void {

    this.obtenerInstructores();

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
    this.enviarInstructor.emit(id);
  }

}
