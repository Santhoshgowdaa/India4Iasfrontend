import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NotFoundComponent } from './not-found/not-found.component'
import { ReusableModule } from '../@reusable-components/reusable.module';


@NgModule({
  declarations: [LoginComponent, RegisterComponent, ForgotPasswordComponent, NotFoundComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReusableModule
  ]
})
export class LoginModule { }
