import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LojaService {
  //url da api
  private apiUrl = 'https://fakestoreapi.com/products';

  constructor(private http:HttpClient) { }
}
