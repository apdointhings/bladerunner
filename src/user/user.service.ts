import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>,
      ) {}

    get():Promise<UserEntity[]>{
        return this.userRepository.find();
    }

    create(createuserdto:CreateUserDto){
        return this.userRepository.save(createuserdto);
    }

    findbyemail(email:string){
        return this.userRepository.findOne({where:{email}});
    }

    delete(id:number){
        return this.userRepository.delete(id);
    }

    show(id:number){
        return this.userRepository.findOne({where: {id}});
    }

    update(updateusedto:UpdateUserDto , id:number){
        return this.userRepository.update(id,updateusedto);
    }
}
