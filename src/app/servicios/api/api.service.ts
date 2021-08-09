import { Injectable } from '@angular/core';
import {LoginI} from '../../modelos/Login.interface';
import {ResponseI} from '../../modelos/responsive.interface';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListaPacientesI } from 'src/app/modelos/listapacientes';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string ="http://api.solodata.es/";
  constructor(private http:HttpClient) { }


loginByEmail(form :LoginI):Observable<ResponseI>
{
  let direccion = this .url + "auth";
  return this.http.post<ResponseI>(direccion,form);
}

getAllPatients(page:number):Observable<ListaPacientesI[]>{
let   direccion = this.url + "pacientes?page=" + page;
return this.http.get<ListaPacientesI[]>(direccion);
}

}

