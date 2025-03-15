import { Controller } from '@nestjs/common';
import { Practice1Controller } from './practice1.controller';
import { Practice2Service } from './practice2.service';

@Controller('practice2')
export class Practice2Controller extends Practice1Controller {
  constructor(private readonly practice2Service: Practice2Service) {
    super(practice2Service);
  }
}
