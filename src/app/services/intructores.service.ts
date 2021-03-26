import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IntructoresService {

  constructor( private http:HttpClient ) { }

  rutaApi = 'http://localhost:3000/instructor/';
  
// http://localhost:3000/instructor/60595da4b20d1167c5da361f
  obtenerInstructores(){
    return this.http.get(this.rutaApi);
  }

  // http://localhost:3000/instructor/60595da4b20d1167c5da361f
  obtenerClases(id:any){
    return this.http.get(this.rutaApi+id);
  }

}
