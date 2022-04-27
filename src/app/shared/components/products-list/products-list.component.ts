import { CreateProductDTO, UpdateProductDTO } from './../../../models/product.model';
import { ProductsService } from './../../../services/products.service';
import { StoreService } from './../../../services/store.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product, DefaultProduct } from 'src/app/models/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent {
  @Input() products: Product[] = []
  @Output() showMoreProducts = new EventEmitter()
  @Input() set productId(id: string | null) {
    if(id){
      this.onShowDetail(id)
    }
  }
  myShoppingCart : Product [] = []
  showProductDetail = false
  productChoosen: Product = DefaultProduct
  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
    ) {
    this.myShoppingCart = storeService.getMyShoppingCart()
  }

  onAddToShoppingCart(product: Product){
    this.storeService.addProduct(product)
  }
  
  onShowDetail(id: string){
    this.showProductDetail = false
    this.productsService.getProduct(id)
      .subscribe(data => {
        this.showProductDetail = true
        this.productChoosen = data
      })
  }
  
  toggleProductDetail(){
    this.showProductDetail = !this.showProductDetail
  }
  
  createNewProduct(){
    const product: CreateProductDTO = {
      title: 'Nuevo producto',
      description: 'Nueva descripcion',
      images: [],
      price: 1000,
      categoryId: 2
    }
    this.productsService.create(product)
      .subscribe(data => {
        this.products.unshift(data)
      })
  }
  
  updateProduct(){
    const changes: UpdateProductDTO = {
      title: 'titulo cambiado'
    }
    const id = this.productChoosen.id
    this.productsService.update(id, changes)
      .subscribe(data => {
        const productIndex = this.products.findIndex(item => item.id === this.productChoosen.id)
        this.products[productIndex] = data
      })
  }
  
  deleteProduct() {
    const id = this.productChoosen.id
    this.productsService.delete(id)
      .subscribe(() => {
        const productIndex = this.products.findIndex(item => item.id === this.productChoosen.id)
        this.products.splice(productIndex, 1)
        this.showProductDetail = false
      })
  }
  
  loadMore(){
    this.showMoreProducts.emit()
  }
}
