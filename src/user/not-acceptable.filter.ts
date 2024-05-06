import { ArgumentsHost, ExceptionFilter, HttpException } from "@nestjs/common";
import { Catch, NotFoundException} from '@nestjs/common';
import { Response } from 'express';

export class NotAcceptableFilter implements ExceptionFilter{
    catch(exception:HttpException,host:ArgumentsHost){
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();

        if (exception.getStatus() === 406) {
            response.status(406);
            response.json({
              statusCode: 406,
              message: 'Not Acceptable',
            });
          } else {
            throw exception;
          }
    }
}