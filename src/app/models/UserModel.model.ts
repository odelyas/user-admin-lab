import { Info } from './info.model';

export class UserModel 
{
    // id:number;
    // username:string;
    // email:string;
    // info:Info;

    constructor( public id:number = 99,
        public username:string = "john_d",
        public email:string = "john.doe@gmail.com",
        public info:Info = new Info()
        ){}

}