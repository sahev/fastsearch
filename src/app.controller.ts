import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('q=:q')
  getSearch(@Param() params): Promise<any> {
    return this.appService.search(params.q);
  }
}
