import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHome(): {} {
    return {title: 'Home Page'}
  }


}
