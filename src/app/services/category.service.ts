import { environment } from './../../environments/environment';
import { Category } from './../models/product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
  private URL = 'https://young-sands-07814.herokuapp.com/api/categories'
  
  constructor(
    private http: HttpClient
  ) { }
  
  getAll(){
    return this.http.get<Category[]>(this.URL)
  }
}
