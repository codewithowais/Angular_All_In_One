import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllcategoryComponent } from './allcategory/allcategory.component';
import { ProductComponent } from './product/product.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: "",
		component: AllcategoryComponent
	},
  {
		path: "products",
		component: ProductComponent
	}
];

@NgModule({
  declarations: [
    AllcategoryComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ProductsModule { }
