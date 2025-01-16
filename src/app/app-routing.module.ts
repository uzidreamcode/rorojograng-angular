import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentComponent } from './component/component.component';
import { UserAddComponent } from './user-add/user-add.component';

const routes: Routes = [
  {
    // path : '', component: ComponentComponent
    path : '', component: UserAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
