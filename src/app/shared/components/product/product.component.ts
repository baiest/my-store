import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product, DefaultProduct } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: Product = DefaultProduct

  @Output() addEventProduct = new EventEmitter<Product>()
  @Output() showProductDetail = new EventEmitter<string>()

  constructor() { }

  onAddToCart(){
    this.addEventProduct.emit(this.product)
  }
  
  showDetail(){
    this.showProductDetail.emit(this.product.id)
  }

}
