import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Product, CreateProductDTO, UpdateProductDTO } from './../models/product.model';
import { checkTime } from '../interceptor/time.interceptor';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private URL_PRODUCTS = "/api/products"
  private URL = "/api/"
  
  constructor(private http: HttpClient) { }

  getAllProducts(){
    return this.http.get<Product[]>(this.URL_PRODUCTS)
  }
  
  getByCategory(categoryId: string, limit: number, offset: number){
    let params = new HttpParams()
    if((limit && offset) !== null){
      params = params.set('limit', limit)
      params = params.set('offset', offset)
    }
    return this.http.get<Product[]>(`${this.URL}/categories/${categoryId}/products`, { params })
  }
  
  getProductsByPage(limit: number, offset: number) {
    return this.http.get<Product[]>(this.URL_PRODUCTS, {
      params: {
        limit,
        offset
      },
      context: checkTime()
    })
  }
  
  getProduct(id: string){
    return this.http.get<Product>(`${this.URL_PRODUCTS}/${id}`)
  }
  
  create(dto: CreateProductDTO) {
    return this.http.post<Product>(this.URL_PRODUCTS, dto)
  }
  
  update(id: string, dto: UpdateProductDTO) {
    return this.http.put<Product>(`${this.URL_PRODUCTS}/${id}`, dto)
  }
  
  delete(id: string) {
    return this.http.delete<boolean>(`${this.URL_PRODUCTS}/${id}`)
  }
}
