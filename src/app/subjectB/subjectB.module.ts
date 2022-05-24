import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubC1Component } from '../subjectB/sub-c1/sub-c1.component';
import { SubC2Component } from '../subjectB/sub-c2/sub-c2.component';
import { SubC3Component } from '../subjectB/sub-c3/sub-c3.component';
import { SubC4Component } from '../subjectB/sub-c4/sub-c4.component';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: "",
		component: SubC1Component
	}
 
];

@NgModule({
  declarations: [
    
   
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class SubjectBModule { }
