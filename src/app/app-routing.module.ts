import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page11Component } from './page1/page1-1/page1-1.component';
import { Page12Component } from './page1/page1-2/page1-2.component';
import { Page21Component } from './page2/page2-1/page2-1.component';
import { Page22Component } from './page2/page2-2/page2-2.component';


export const routes: Routes = [
  {path: '',redirectTo:'page1', pathMatch: 'full'},
  { path: 'page1', component: Page1Component,
    children:[
      {path: 'page11', component: Page11Component},
      {path: 'page12', component: Page12Component}
    ]
  },
  { path: 'page2', component: Page2Component,
    children:[
      { path: 'page21', component: Page21Component},
      { path: 'page22', component: Page22Component}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
