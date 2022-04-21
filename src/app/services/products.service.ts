import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product, CreateProductDTO, UpdateProductDTO } from './../models/product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private URL = 'https://young-sands-07814.herokuapp.com/api/products'
  
  constructor(private http: HttpClient) { }

  getAllProducts(){
    return this.http.get<Product[]>(this.URL)
  }
  
  getProductsByPage(limit: number, offset: number) {
    return this.http.get<Product[]>(this.URL, {
      params: {
        limit,
        offset
      }
    })
  }
  
  getProduct(id: string){
    return this.http.get<Product>(`${this.URL}/${id}`)
  }
  
  create(dto: CreateProductDTO) {
    return this.http.post<Product>(this.URL, dto)
  }
  
  update(id: string, dto: UpdateProductDTO) {
    return this.http.put<Product>(`${this.URL}/${id}`, dto)
  }
  
  delete(id: string) {
    return this.http.delete<boolean>(`${this.URL}/${id}`)
  }
}
