import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { CustomDirecComponent } from './custom-direc/custom-direc.component';
import { CustomDirective } from './custom.directive';
import { GetapiComponent } from './getapi/getapi.component';
import { HostlistnerComponent } from './hostlistner/hostlistner.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ParentComponent } from './parent/parent.component';
import { AllcategoryComponent } from './products/allcategory/allcategory.component';
import { ProductComponent } from './products/product/product.component';


const routes: Routes = [
  { path: '', canActivate: [AuthGuard], component: ParentComponent  },
 
  { path: 'getapi', component: GetapiComponent ,canActivate: [AuthGuard]},
  { path: 'product', loadChildren:()=>import('../app/products/products.module').then(m => m.ProductsModule)
  ,canLoad: [AuthGuard] },
{ path: 'subject', loadChildren:()=>import('../app/subjectB/subjectB.module').then(m => m.SubjectBModule)
,canLoad: [AuthGuard]},
{ path: 'cusdir', component:CustomDirecComponent,canActivate: [AuthGuard]},
{ path: 'hostlistner', component:HostlistnerComponent,canActivate: [AuthGuard]},
{ path: 'login', component:LoginComponent},
{ path: 'logout', component:LogoutComponent},

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  	
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
