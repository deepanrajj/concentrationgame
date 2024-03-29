import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CghomeComponent } from './cgpages/cghome/cghome.component';

const routes: Routes = [
  { path:  '', redirectTo:  'home', pathMatch:  'full' },
  {
      path:  'home',
      component:  CghomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
