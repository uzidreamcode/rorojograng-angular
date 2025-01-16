import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentComponent } from './component/component.component';
import { UserAddComponent } from './user-add/user-add.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    // path : '', component: ComponentComponent
    // path : '', component: UserAddComponent
        path : '', component: LoginComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
