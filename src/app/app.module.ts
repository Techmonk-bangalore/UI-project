import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { PusherService } from './vote/pusher.service';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './login/login.component';
import { VoteComponent } from './vote/vote.component';
import { AdminComponent } from './admin/admin.component';
import { SignupComponent } from './signup/signup.component';
import { ServiceService } from './service.service';


@NgModule({
  declarations: [AppComponent, LoginComponent, VoteComponent,AdminComponent, SignupComponent],
  imports: [BrowserModule, HttpClientModule, ChartsModule, AppRoutingModule],
  providers: [PusherService, ServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
