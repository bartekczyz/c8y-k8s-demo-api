import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get('/machine-ip')
  getHello() {
    return {
      address: this.appService.getMachineIpAddress(),
    };
  }

  @Get('/healthz')
  healthCheck(): string {
    return 'ok';
  }
}
