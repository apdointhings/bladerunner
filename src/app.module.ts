import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { UserEntity } from './user/entity/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [UserModule , TypeOrmModule.forRoot({
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: null,
    database: 'nestjs',
      // host: 'mysql-146c00eb-abhinavpal987654321-da71.c.aivencloud.com',
      // port: 14973,
      // username: 'avnadmin',
      // password: 'AVNS_JDvlFO7IvymIP0a-bTA',
      // database: 'defaultdb',
      entities: [UserEntity],
      synchronize: true,
  }), AuthModule,ProfileModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
