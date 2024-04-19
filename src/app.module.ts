import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { UserEntity } from './user/entity/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule , TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'sql6.freesqldatabase.com',
    port: 3306,
    username: "sql6700191",
    password: '9e4T5889xs',
    database: 'sql6700191',
    entities: [UserEntity],
    synchronize: true,
  }), AuthModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
