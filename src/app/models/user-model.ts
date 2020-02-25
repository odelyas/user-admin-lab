import {info} from 'src/app/models/info'

export class UserModel {

  id: number ;
  username: string;
  email: string ;
  //info_:info;
  constructor(id: number , username: string ,email:string  ,firstName: string,  lastName: string
    ,  jobTitle: string,  avatar: string,phoneNumber: string )
   {
    this.id = id;
    this.username = username;
    this.email = email;
    // this.info_.avatar = avatar;
    // this.info_.firstName = firstName;
    // this.info_.lastName = lastName;
    // this.info_.phoneNumber = phoneNumber;
    }
}
