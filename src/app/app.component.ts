import { Component, ViewChild } from '@angular/core';
import { ClasesComponent } from './components/clases/clases.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Classroom';

  @ViewChild(ClasesComponent) clasesComponent!: ClasesComponent;


  constructor() {

  }

  obtenerInstructor(id: any) {
    console.log('ID desde el padre', id);

    this.clasesComponent.obtenerClases(id);
    

  }
}
