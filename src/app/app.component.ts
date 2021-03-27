import { Component, ViewChild } from '@angular/core';
import { AnunciosComponent } from './components/anuncios/anuncios.component';
import { AsignacionesComponent } from './components/asignaciones/asignaciones.component';
import { ClasesComponent } from './components/clases/clases.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ParticipantesComponent } from './components/participantes/participantes.component';
import { IntructoresService } from './services/intructores.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Classroom';

  @ViewChild(ClasesComponent) clasesComponent!: ClasesComponent;
  @ViewChild(AnunciosComponent) anunciosComponent!: AnunciosComponent;
  @ViewChild(ParticipantesComponent) participantesComponent!: ParticipantesComponent;
  @ViewChild(NavbarComponent) navbarComponent!: NavbarComponent;
  @ViewChild(AsignacionesComponent) asignacionesComponent!: AsignacionesComponent;


  claseSeleccionada: boolean = false;
  idInstructor: any = '';
  idClaseSeleccionada: any = '';
  regionSeleccionada: any = '';


  constructor( private instructorService: IntructoresService ) {

  }

  obtenerInstructor(id: any) {
    console.log('ID desde el padre', id);
    this.idInstructor = id;
    this.clasesComponent.obtenerClases(id);
  }

  obtenerClaseSeleccionada(id: any) {
    console.log('Id clase :', id);
    this.claseSeleccionada = true;
    this.idClaseSeleccionada = id;
    this.navbarComponent.mostrarMenu = true;
    this.obtenerNombreClase();
  }

  obtenerNombreClase(){
    this.instructorService.obtenerClases(this.idInstructor).subscribe((data:any)=>{
      data.clases.forEach((item:any) => {
        if(item._id == this.idClaseSeleccionada){
          this.navbarComponent.nombreClase = item.nombreClase;
        }
      });
    });
  }

  
  obtenerRegion(region: any) {
    this.regionSeleccionada = region;

    if (this.regionSeleccionada == 'participantes') {

      setTimeout(() => {
        this.participantesComponent.obtenerParticipantes(this.idInstructor, this.idClaseSeleccionada);
      }, 100);
    }

    if (this.regionSeleccionada == 'anuncios') {

      setTimeout(() => {
        this.anunciosComponent.obtenerAnuncios(this.idInstructor, this.idClaseSeleccionada);
      }, 100);
    }

    if (this.regionSeleccionada == 'asignaciones') {

      setTimeout(() => {
        this.asignacionesComponent.obtenerAsignaciones();
      }, 100);
    }
  }

}
