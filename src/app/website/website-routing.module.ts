import { ExitGuard } from './../guards/exit.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { MyCartComponent } from './pages/my-cart/my-cart.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';

import { AuthGuard } from '../guards/auth.guard';
const routes: Routes = [ {
  path: '',
  component: LayoutComponent,
  children: [
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'category',
      loadChildren: () => import('./pages/category/category.module').then(m => m.CategoryModule),
      data: {
        preload: true
      }
    },
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'register',
      component: RegisterComponent,
      canDeactivate: [ExitGuard]
    },
    {
      path: 'recovery',
      component: RecoveryComponent
    },
    {
      path: 'profile',
      component: ProfileComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'cart',
      component: MyCartComponent
    },
    {
      path: 'product/:id',
      component: ProductDetailComponent
    },
  ]
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
