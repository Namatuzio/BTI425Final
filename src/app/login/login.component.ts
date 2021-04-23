import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';
import { User } from '../User'
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user:User;
  public warning:string;

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit() {
    this.user = new User();
  }

  onSubmit(f: NgForm): void {
    if(this.user.userName.match("^[A-Za-z0-9]*$") && this.user.password.match("^[A-Za-z0-9]*$"))
    {
      this.auth.login(this.user).subscribe(
        (success) => {
          localStorage.setItem('access_token',success.token);
          this.router.navigate(['/contact-us']);
        },
        (err) => {
          this.warning = err.error.message;
        }
      );
    }
    else
    {
      this.warning = "Only use letters and numbers";
    }


  }
}
