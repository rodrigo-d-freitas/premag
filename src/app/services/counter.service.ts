import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Params } from '../models/Params';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {


  constructor(private http: HttpClient) {}

  protected UrlServiceV1: string = 'http://localhost:3000/';

  construirContador(): Observable<Params[]> {
    return this.http.get<Params[]>(this.UrlServiceV1 + "counter");
  }
}
