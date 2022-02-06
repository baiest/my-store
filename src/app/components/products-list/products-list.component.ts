import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [
    {
      id: '1',
      name: 'Producto 1',
      image: '../assets/images/album.jpg',
      price: 30000,
    },
    {
      id: '2',
      name: 'Bike',
      image: '../assets/images/bike.jpg',
      price: 25000,
    },
    {
      id: '3',
      name: 'Books',
      image: '../assets/images/books.jpg',
      price: 65000,
    },
    {
      id: '4',
      name: 'Glasses',
      image: '../assets/images/glasses.jpg',
      price: 49000,
    },
    {
      id: '5',
      name: 'House',
      image: '../assets/images/house.jpg',
      price: 20000,
    },
    {
      id: '6',
      name: 'Toy',
      image: '../assets/images/toy.jpg',
      price: 15000,
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  onAddToShoppingCart(product: Product){
    console.log(product)
  }
}
