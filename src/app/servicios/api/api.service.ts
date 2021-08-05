import { Injectable } from '@angular/core';
import {LoginI} from '../../modelos/Login.interface';
import {ResponseI} from '../../modelos/responsive.interface';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

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

}

