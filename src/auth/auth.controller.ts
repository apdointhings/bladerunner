import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
    
    constructor(private authservice: AuthService) {}
    
    @UseGuards(AuthGuard('local'))
    @Post('/login')
    async login(@Body() logindto:any){
        return this.authservice.validateUser(logindto.email,logindto.password);
    }
}
