import { Info } from './info.model';

export class UserModel 
{
   id:number;
     username:string;
     email:string;
    //info:Info;

    constructor({ id, username, email }: { id: 99; username: "john_d"; email: "john.doe@gmail.com"; }        // info:Info = new Info()
        ){}

}