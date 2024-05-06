import { NotAcceptableFilter } from './user/not-acceptable.filter';
import { Controller, Get , UseFilters} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
@UseFilters(new NotAcceptableFilter())
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
