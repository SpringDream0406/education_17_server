import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePractice1Dto } from './dto/create-practice1.dto';
import { UpdatePractice1Dto } from './dto/update-practice1.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Practice1 } from './entities/practice1.entity';
import { Repository } from 'typeorm';

@Injectable()
export class Practice1Service {
  constructor(
    @InjectRepository(Practice1)
    protected practice1Repository: Repository<Practice1>,
  ) {}
  findAll() {
    return this.practice1Repository.find({
      order: { id: 'DESC' },
    });
  }

  create(createPractice1Dto: CreatePractice1Dto) {
    return this.practice1Repository.save(createPractice1Dto);
  }

  update(id: number, updatePractice1Dto: UpdatePractice1Dto) {
    return this.practice1Repository.update(id, updatePractice1Dto);
  }

  remove(id: number) {
    if (!id) {
      throw new BadRequestException('id is required');
    }
    return this.practice1Repository.delete(id);
  }
}
