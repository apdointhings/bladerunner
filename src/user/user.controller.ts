import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
    // private userService:UserService;
    // constructor(userService:UserService){
    //     this.userService = userService;
    // }
    constructor(private userService: UserService) {}
    @Get()
    getusers(){
        return this.userService.get();
    }
    @Post()
    store(@Body() createuserdto:CreateUserDto){
        return this.userService.create(createuserdto);
    }
    @Patch('/:userId')
    update(@Body() updateuserdto:UpdateUserDto , @Param('userid',ParseIntPipe)userid:number){
        return this.userService.update(updateuserdto,userid);
    }
    @Get('/:userId')
    getuser(@Param('userid',ParseIntPipe)userid:number){
        return this.userService.dikhao(userid);
    }
    @Delete('/:userId')
    deleteuser(@Param('userid',ParseIntPipe)userid:number){
        return this.userService.delete(userid);
    }
}
