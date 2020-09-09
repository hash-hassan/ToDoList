import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentUserService } from '../../Services/current-user.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {



  constructor(private router: Router, private currentUser:CurrentUserService) 
  { 
  }

  ngOnInit(): void {
  }

  isInValidCred:boolean = false;

  onSubmit(val)
  {
    // console.warn(val.username);
    // console.warn(val.pswd);
    if(this.currentUser.setCurrentUser(val.username,val.pswd))
    {
      this.router.navigate(['./list'])
      this.isInValidCred = false
    }
    else
    {
      this.isInValidCred = true
    }
  }

}
