import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IntructoresService } from 'src/app/services/intructores.service';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css']
})
export class ClasesComponent implements OnInit {

  constructor(private instructorService: IntructoresService) { }

  clases: any = [];
  @Output() enviarClase = new EventEmitter();

  ngOnInit(): void {
  }

  obtenerClases(id: any) {
    this.instructorService.obtenerClases(id).subscribe((data: any) => {
      this.clases = data.clases;
      console.log(this.clases);
    });
  }

  seleccionarClase(id:any){
    this.enviarClase.emit(id);
  }




}
