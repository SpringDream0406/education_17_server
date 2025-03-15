import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Practice2 } from './entities/practice2.entity';
import { Practice1Service } from '../practice1/practice1.service';

@Injectable()
export class Practice2Service extends Practice1Service {
  constructor(
    @InjectRepository(Practice2)
    private practice2Repository: Repository<Practice2>,
  ) {
    super(practice2Repository);
  }
}
