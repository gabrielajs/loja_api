import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LojaService {
  //url da api
  private apiUrl = 'https://fakestoreapi.com/products';

  constructor(private http:HttpClient) { }

  //metodo para obter os produtos
  getProdutos(){
    //faz uma requisição GET para a API e retorna os produtos
    return this.http.get(this.apiUrl)
  }

  //metodo para obter um produto específico pelo id
  getProdutoById(id: number) {
    //faz uma requisição GET para a API e retorna o produto com o id especificado
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  
}
