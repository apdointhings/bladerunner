import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { error } from 'console';
import { NotFoundException } from '@nestjs/common';
import { Request } from '@nestjs/common';

@Controller('user')
export class UserController {
    
    constructor(private userService: UserService) {}

    @Get()
    getusers(){
        return this.userService.get();
    }
    @Get('profile')
    getProfile(@Request() req) {
    return req.user;
  }

    async user_comparing(createuserdto:CreateUserDto) :Promise<boolean>{
        const user_from_input = await this.userService.findbyemail(createuserdto.email);
        if(user_from_input && user_from_input.email == createuserdto.email){
            return true;
        }else{
            return false;
        }
    }
    async user_value_exist(userid:number) :Promise<boolean>{
        const user_from_input = await this.userService.show(userid);
        if(user_from_input && user_from_input.id == userid){
            return true;
        }else{
            return false;
        }
    }
    
    @Post()
    async store(@Body() createuserdto:CreateUserDto){
        if(await this.user_comparing(createuserdto) == true){
            throw new HttpException('Not Acceptable', HttpStatus.NOT_ACCEPTABLE);
        }else{
            return this.userService.create(createuserdto);
        }
    }

    @Patch('/:userId')
    async update(@Body() updateuserdto:UpdateUserDto , @Param('userid',ParseIntPipe)userid:number){
        if(await this.user_value_exist(userid) == true){
            return this.userService.update(updateuserdto,userid);
        }else{
            throw new NotFoundException(`Item with ID ${userid} not found`);
        }
    }

    @Get('/:userId')
    async getuser(@Param('userId',ParseIntPipe)userId:number){
        if(await this.user_value_exist(userId) == true){
            return this.userService.show(userId);
        }else{
            throw new NotFoundException(`Item with ID ${userId} not found`);
        }
    }

    @Delete('/:userId')
    async deleteuser(@Param('userId',ParseIntPipe)userId:number){
        if(await this.user_value_exist(userId) == true){
            this.userService.delete(userId);
            return { message: 'Item deleted successfully' };
        }else{
            throw new NotFoundException(`Item with ID ${userId} not found`);
        }
    }
}
