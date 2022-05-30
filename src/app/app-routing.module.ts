import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CustomDirecComponent } from './custom-direc/custom-direc.component';
import { CustomDirective } from './custom.directive';
import { GetapiComponent } from './getapi/getapi.component';
import { HostlistnerComponent } from './hostlistner/hostlistner.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ParentComponent } from './parent/parent.component';
import { AllcategoryComponent } from './products/allcategory/allcategory.component';
import { ProductComponent } from './products/product/product.component';


const routes: Routes = [
  { path: '', component: ParentComponent  },
  { path: 'Ex1', component: ParentComponent },
  { path: 'getapi', component: GetapiComponent },
  { path: 'product', loadChildren:()=>import('../app/products/products.module').then(m => m.ProductsModule)
},
{ path: 'subject', loadChildren:()=>import('../app/subjectB/subjectB.module').then(m => m.SubjectBModule)
},
{ path: 'cusdir', component:CustomDirecComponent},
{ path: 'hostlistner', component:HostlistnerComponent},
{ path: 'login', component:LoginComponent},

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  	
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
