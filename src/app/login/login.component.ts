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
        if(response){
          this.router.navigate(['../vote']);
        }

    }, (error) => {
      "ERROR"
        // this.toastrService.danger('Invalid login')
    })
  }
}
