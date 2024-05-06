import { Injectable ,HttpException , HttpStatus} from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World';
  }
}
