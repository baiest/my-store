import { SwiperModule } from 'swiper/angular';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { WebsiteRoutingModule } from './website-routing.module';

import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { MyCartComponent } from './pages/my-cart/my-cart.component';
import { CategoryComponent } from './pages/category/category.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { LayoutComponent } from './components/layout/layout.component';



@NgModule({
  declarations: [
    ProductDetailComponent,
    ProfileComponent,
    RecoveryComponent,
    RegisterComponent,
    LoginComponent,
    MyCartComponent,
    CategoryComponent,
    HomeComponent,
    MenuComponent,
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    SharedModule,
    SwiperModule
  ]
})
export class WebsiteModule { }
