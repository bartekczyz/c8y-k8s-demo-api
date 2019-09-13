import { Injectable } from '@nestjs/common';
import * as ip from 'ip';

@Injectable()
export class AppService {
  getMachineIpAddress(): string {
    return ip.address();
  }
}
