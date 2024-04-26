import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {

    constructor(
        private userservice: UserService,
      ) {}

    async validateUser(email:string , password:string){
        const user = await this.userservice.findbyemail(email);
        if(user && user.password == password){
            return user;
        }else{
            return null;
        }
    }
}
