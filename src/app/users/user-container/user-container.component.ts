import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/UserModel.model';
import { USERS } from 'src/app/mock/users-model.mock';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css']
})
export class UserContainerComponent implements OnInit {

  public currentUser:UserModel
  public users: UserModel[];
  constructor() { }

  ngOnInit(): void {
    //this.currentUser = new UserModel()
   // console.log("User Container Init")
   this.users= USERS
  }

  saveUserData(emailValue:string,userNameValue:string)
  {
    this.currentUser.email = emailValue;
    this.currentUser.username = userNameValue;
  }
  
}
