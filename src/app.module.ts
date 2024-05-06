import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { UserEntity } from './user/entity/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';
import { APP_FILTER } from '@nestjs/core';
import { NotFoundFilter } from './user/not-found.filter';
import { MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [UserModule,AuthModule,
    JwtModule.register({
      secret: 'your_secret_key',
      signOptions: { expiresIn: '120s' },
    }), TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'mysql-146c00eb-abhinavpal987654321-da71.c.aivencloud.com',
    port: 14973,
    username: 'avnadmin',
    password: 'AVNS_JDvlFO7IvymIP0a-bTA',
    database: 'defaultdb',
    entities: [UserEntity],
    synchronize: true,
  }), AuthModule,ProfileModule],
  controllers: [AppController],
  providers: [AppService , {
    provide: APP_FILTER,
    useClass: NotFoundFilter,
  }],
})
export class AppModule {}
