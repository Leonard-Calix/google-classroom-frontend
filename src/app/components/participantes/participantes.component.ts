import { Component, OnInit } from '@angular/core';
import { IntructoresService } from 'src/app/services/intructores.service';

@Component({
  selector: 'app-participantes',
  templateUrl: './participantes.component.html',
  styleUrls: ['./participantes.component.css']
})
export class ParticipantesComponent implements OnInit {

  constructor(private instructorService: IntructoresService) { }
  participantes: any = []

  ngOnInit(): void {
  }

  obtenerParticipantes(idInstructor: any, idClase: any) {

    this.instructorService.obtenerParticipantes(idInstructor, idClase).subscribe((data: any) => {
      this.participantes = data;
      console.log(data)
    });

  }

}
