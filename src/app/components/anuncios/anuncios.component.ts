import { Component, Input, OnInit } from '@angular/core';
import { IntructoresService } from 'src/app/services/intructores.service';

@Component({
  selector: 'app-anuncios',
  templateUrl: './anuncios.component.html',
  styleUrls: ['./anuncios.component.css']
})
export class AnunciosComponent implements OnInit {

  anuncios: any = [];
    
  constructor( private instructorService: IntructoresService ) { }

  ngOnInit(): void {
    
  }

  obtenerAnuncios(idInstructor:any, idClase:any){

    this.instructorService.obtenerAnuncios(idInstructor, idClase).subscribe((data:any)=>{
      console.log(data);
      this.anuncios = data;
    });
  }

}
