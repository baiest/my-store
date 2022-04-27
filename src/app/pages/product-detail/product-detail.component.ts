import { switchMap } from 'rxjs';
import { ProductsService } from './../../services/products.service';
import { Product } from './../../models/product.model';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import Swiper, { SwiperOptions, Autoplay, Pagination, EffectCoverflow } from 'swiper';
import { Location } from '@angular/common';

Swiper.use([Autoplay, EffectCoverflow, Pagination])
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  productId: string | null = null
  product: Product | null = null
  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    autoplay: {
      delay: 2000
    },
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };
  constructor(
    private route: ActivatedRoute,
    private productsService : ProductsService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.paramMap
    .pipe(
      switchMap(params => { 
        this.productId = params.get('id')
        if(this.productId){
          return this.productsService.getProduct(this.productId)
        }
        return [null]
      }))
    .subscribe(data => this.product = data)
  }
  
  goToBack(){
    this.location.back()
  }
}
