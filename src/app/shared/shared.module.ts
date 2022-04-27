import { SwiperModule } from 'swiper/angular';
import { RouterModule } from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductComponent } from './components/product/product.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const Components = [
  ProductComponent,
  ProductsListComponent
]

@NgModule({
  declarations: Components,
  imports: [
    CommonModule,
    RouterModule,
    SwiperModule
  ],
  exports: Components
})
export class SharedModule { }
