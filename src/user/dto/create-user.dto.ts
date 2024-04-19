import { IsEmail, IsNotEmpty, IsString, isStrongPassword } from "class-validator";
import { Unique } from 'typeorm';


@Unique(['email'])
export class CreateUserDto{
    @IsString()
    name:string;
    
    @IsEmail()
    email:string;

    @IsString()
    password:string;
}