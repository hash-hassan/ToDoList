import { Component, OnInit } from '@angular/core';

import { CurrentUserService } from '../../Services/current-user.service'
import { Router } from '@angular/router';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private currentUser:CurrentUserService, private router:Router) { }

  collapsed = true;

  ngOnInit(): void {
  }

  signOut()
  {
    this.currentUser.clear()
    this.router.navigate(['/'])
  }

}
