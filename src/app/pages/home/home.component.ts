import { ActivatedRoute } from '@angular/router';
import { Product } from './../../models/product.model';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  products: Product[] = []
  limit = 10
  offset = 0 
  productId: string | null = null

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loadMore()
    this.route.queryParamMap
      .subscribe(params => {
        this.productId = params.get('product')
      })
  }
  
  loadMore(){
    this.productsService.getProductsByPage(this.limit, this.offset)
    .subscribe(data => {
      this.products = [...this.products, ...data]
      this.offset += this.limit
    })
  }
}
