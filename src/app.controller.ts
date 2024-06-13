import { Controller, Get } from '@nestjs/common';

@Controller('hello')
export class AppController {
  @Get()
  getHello(): string {
    return 'Test deneme 1 2 3!';
  }
  @Get('test')
  getGoodbye(): string {
    return 'Test 1 2 3 4!';
  }
}
