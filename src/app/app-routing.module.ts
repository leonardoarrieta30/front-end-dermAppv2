import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ViewComponent} from "./public/pages/view/view.component";
import {HomeComponent} from "./public/pages/home/home.component";
import {AboutComponent} from "./public/pages/about/about.component";
import {RegisterFormComponent} from "./public/security/register-form/register-form.component";
import {LoginFormComponent} from "./public/security/login-form/login-form.component";
import {LoginFormDermatologistComponent} from "./public/security/login-form-dermatologist/login-form-dermatologist.component";
import {LoginFormPatientComponent} from "./public/security/login-form-patient/login-form-patient.component";

const routes: Routes = [
  { path: '', component: ViewComponent, children:[
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'sign-in', component: RegisterFormComponent },
      { path: 'login', component:LoginFormComponent},
      { path: 'home', component: HomeComponent },
      { path: 'login-dermatologist', component: LoginFormDermatologistComponent },
      { path: 'login-patient', component: LoginFormPatientComponent },
    ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
