import { Injectable } from '@angular/core';
import { UserModel } from './user-model'
import { ToDoComponent } from './list/to-do/to-do.component';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  constructor(
    
  ) { }

  private currentUser:UserModel = {userName:null, password: null, status:null};

  setCurrentUser(userName:string, password:string, status:number = 1)
  {
    if(userName == 'asd' && password == 'asd')
    {
      window.localStorage.setItem("userName",userName)
      window.localStorage.setItem("password",password)
      window.localStorage.setItem("status",status.toString())
      this.currentUser.userName = userName;
      this.currentUser.password = password;
      this.currentUser.status = status;
      return true
    }
    else
    {
      return false
    }
    
  }

  getCurrentUser():UserModel
  {
    this.currentUser.userName = window.localStorage.getItem("userName")
    this.currentUser.password = window.localStorage.getItem("password")
    this.currentUser.status = Number.parseInt(window.localStorage.getItem("status"))
    return this.currentUser;
  }

  clear()
  {
    window.localStorage.removeItem("userName")
    window.localStorage.removeItem("password")
    window.localStorage.setItem("status",'0')
    this.currentUser = {userName:null, password: null, status:null};
  }

  isSignedIn()
  {
    if (window.localStorage.getItem("status") == "0")
    {
      return false
    }
    else
    {
      return true
    }
  }

}
