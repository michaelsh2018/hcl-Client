import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(
    private http: HttpClient
  ) { }
    
  getProducts() : Observable<Product[]>{
    return this.http.get<Product[]>(`localhost:8080/products`);
  }

  getProduct(id: number): Observable<Product>{
    return this.http.get<Product>(`localhost:8080/product/${id}`);
  }
}

