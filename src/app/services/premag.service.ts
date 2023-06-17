import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Params } from '../models/Params';
import { Observable } from 'rxjs';
import { Obras } from '../models/Obras';

@Injectable({
  providedIn: 'root'
})
export class PremagService {


  constructor(private http: HttpClient) {}

  protected UrlServiceV1: string = 'http://localhost:3000/';

  construirContador(): Observable<Params[]> {
    return this.http.get<Params[]>(this.UrlServiceV1 + "counter");
  }

  construirCardObras(): Observable<Obras[]> {
    return this.http.get<any[]>(this.UrlServiceV1 + "obras");
  }
}
