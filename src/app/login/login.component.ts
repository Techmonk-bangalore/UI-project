import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,private apiServices: ServiceService) { }
  user: any = {};
 
  ngOnInit() {
    this.user.admin = false;
  }
  login(form: NgForm) {    
    if (!form.valid) {
      return;
    }
    const username = form.value.username;
    const password = form.value.password;
    var data = {
      username:username,
      password: password,
    };
    this.apiServices.login(data).subscribe((response) => {
      console.log(response);
        if(response){
          if(this.user.admin ==false){
            this.router.navigate(['../vote']);

          }else{
          this.router.navigate(['../admin']);
          }
        }

    }, (error) => {
      "ERROR"
        // this.toastrService.danger('Invalid login')
    })
  }
}
