import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/UserModel.model';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css']
})
export class UserContainerComponent implements OnInit {

  public currentUser:UserModel

  constructor() { }

  ngOnInit(): void {
    this.currentUser = new UserModel()
   // console.log("User Container Init")
  }

  saveUserData(emailValue:string,userNameValue:string)
  {
    this.currentUser.email = emailValue;
    this.currentUser.username = userNameValue;
  }

}
