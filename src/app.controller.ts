import { Controller, Get, Header, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

@Controller('cats')
export class CatsController {
  @Get()
  findAll(@Req() request: Request) {
    return 'This action returns all cat';
  }

  @Post()
  @Header('Cache-Control', 'none')
  create() {
    return 'This action create a cats';
  }
}
