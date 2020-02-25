import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user-model'
import { USERS } from 'src/app/mock/users-model.mock';


@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css']
})
export class UserContainerComponent implements OnInit {

  //public currentUser: UserModel;
  public users : UserModel[];

  // SaveUserData(username: string, email: string) {
  //   this.currentUser.username = username
  //   this.currentUser.email = email

  // }
  constructor() { }


  ngOnInit(): void {
    console.log("the user container")
   // this.currentUser = new UserModel(1, "davidso", "davidsalomon14@gmail.com", "david", "salomon", "programer", "avatarrrr", "0506219533");
    this.users = USERS
  }

}
