import { CreateProductDTO } from './../../models/product.model';
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
  
  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
    ) {
    this.myShoppingCart = storeService.getMyShoppingCart()
  }

  ngOnInit(): void {
    this.productsService.getAllProducts()
      .subscribe(data => {
        this.products = data
      })
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
}
