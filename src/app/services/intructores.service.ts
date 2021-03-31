import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IntructoresService {

  constructor(private http: HttpClient) { }

  rutaApi = 'http://localhost:3000/instructor/';

  // http://localhost:3000/instructor/60595da4b20d1167c5da361f
  obtenerInstructores() {
    return this.http.get(this.rutaApi);
  }

  // http://localhost:3000/instructor/60595da4b20d1167c5da361f/clases
  agregarClase(id: any, data: any) {
    return this.http.put(this.rutaApi + id + '/clases', data);
  }

  // http://localhost:3000/instructor/
  agregarInstructores(data: any) {
    return this.http.post(this.rutaApi, data);
  }

  // http://localhost:3000/instructor/60595da4b20d1167c5da361f
  obtenerClases(id: any) {
    return this.http.get(this.rutaApi + id);
  }
  //http://localhost:3000/instructor/605959a389dfe75ea4e832d8/clases/605961bf04468e7372b6920b/anuncios
  obtenerAnuncios(idInstructor: any, idClase: any) {
    return this.http.get(`${this.rutaApi}${idInstructor}/clases/${idClase}/anuncios`);
  }

  //http://localhost:3000/instructor/605959a389dfe75ea4e832d8/clases/605961bf04468e7372b6920b/participantes
  obtenerParticipantes(idInstructor: any, idClase: any) {
    return this.http.get(`${this.rutaApi}${idInstructor}/clases/${idClase}/participantes`);
  }

  //http://localhost:3000/instructor/605959a389dfe75ea4e832d8/clases/605961bf04468e7372b6920b/participantes
  agregarParticipantes(idInstructor: any, idClase: any, data: any) {
    return this.http.put(`${this.rutaApi}${idInstructor}/clases/${idClase}/participantes`, data);
  }

  //http://localhost:3000/instructor/605959a389dfe75ea4e832d8/clases/605961bf04468e7372b6920b/asignaciones
  obtenerAsignaciones(idInstructor: any, idClase: any) {
    return this.http.get(`${this.rutaApi}${idInstructor}/clases/${idClase}/asignaciones`);
  }
  //http://localhost:3000/instructor/605959a389dfe75ea4e832d8/clases/605961bf04468e7372b6920b/asignaciones
  agregarAsignaciones(idInstructor: any, idClase: any, data: any) {
    return this.http.put(`${this.rutaApi}${idInstructor}/clases/${idClase}/asignaciones`, data);
  }

  agregarAnuncio(idInstructor: any, idClase: any, data: any) {
    return this.http.put(`${this.rutaApi}${idInstructor}/clases/${idClase}/anuncios`, data);
  }


}
