import { NgModule } from "@angular/core";
import { ProductComponent } from "./product/product.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailsComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(
      [
        {
          path: 'home',  //product/home
          component: ProductComponent
        },
        {
          path: 'details', // product/details
          component: ProductDetailsComponent
        },
        {
          path: 'about', // product/about
          component: AboutComponent
        }
      ]
    
    )
  ]
})
export class ProductModule { }
