import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetapiComponent } from './getapi/getapi.component';
import {HttpClientModule} from '@angular/common/http';
import { PostapiComponent } from './postapi/postapi.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { MenuComponent } from './menu/menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SubC1Component } from './subjectB/sub-c1/sub-c1.component';
import { SubC2Component } from './subjectB/sub-c2/sub-c2.component';
import { SubC3Component } from './subjectB/sub-c3/sub-c3.component';
import { SubC4Component } from './subjectB/sub-c4/sub-c4.component';
@NgModule({
  declarations: [
    AppComponent,
    GetapiComponent,
    PostapiComponent,
    ParentComponent,
    ChildComponent,
    MenuComponent,
    PageNotFoundComponent,
    SubC1Component,
    SubC2Component,
    SubC3Component,
    SubC4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }