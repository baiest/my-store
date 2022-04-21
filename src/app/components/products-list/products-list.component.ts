import { CreateProductDTO, UpdateProductDTO } from './../../models/product.model';
import { Component, OnInit } from '@angular/core';
import { Product, DefaultProduct } from 'src/app/models/product.model';
import { StoreService } from './../../services/store.service';
import { ProductsService } from './../../services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  // products: Product[] = [
  //   {
  //     id: '1',
  //     name: 'Producto 1',
  //     image: '../assets/images/album.jpg',
  //     price: 30000,
  //   },
  //   {
  //     id: '2',
  //     name: 'Bike',
  //     image: '../assets/images/bike.jpg',
  //     price: 25000,
  //   },
  //   {
  //     id: '3',
  //     name: 'Books',
  //     image: '../assets/images/books.jpg',
  //     price: 65000,
  //   },
  //   {
  //     id: '4',
  //     name: 'Glasses',
  //     image: '../assets/images/glasses.jpg',
  //     price: 49000,
  //   },
  //   {
  //     id: '5',
  //     name: 'House',
  //     image: '../assets/images/house.jpg',
  //     price: 20000,
  //   },
  //   {
  //     id: '6',
  //     name: 'Toy',
  //     image: '../assets/images/toy.jpg',
  //     price: 15000,
  //   },
  // ];
  products: Product[] = []
  myShoppingCart : Product [] = []
  showProductDetail = false
  productChoosen: Product = DefaultProduct
  limit = 10
  offset = 0
  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
    ) {
    this.myShoppingCart = storeService.getMyShoppingCart()
  }

  ngOnInit(): void {
    this.loadMore()
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
  
  loadMore() {
    this.productsService.getProductsByPage(this.limit, this.limit)
      .subscribe(data => {
        this.products = [...this.products, ...data]
        this.offset += this.limit
      })
  }
}
