import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { VoteComponent } from './vote/vote.component';
import { AdminComponent } from './admin/admin.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'vote',
    component: VoteComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
