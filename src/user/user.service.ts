import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {

    // @InjectRepository(UserEntity)
    // private userRepository:Repository<UserEntity>
    // constructor( userRepository:Repository<UserEntity>){
    //     this.userRepository = userRepository;
    // }
    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>,
      ) {}
    get():Promise<UserEntity[]>{
        return this.userRepository.find();
    }
    create(ganja:CreateUserDto){
        return this.userRepository.save(ganja);
    }
    findbyemail(email:string){
        return this.userRepository.findOne({where:{email}});
    }
    delete(ganja:number){
        return this.userRepository.delete(ganja);
    }
    dikhao(id:number){
        return this.userRepository.findOne({where: {id}});
    }
    update(updateusedto:UpdateUserDto , id:number){
        return this.userRepository.update(id,updateusedto);
    }
}
