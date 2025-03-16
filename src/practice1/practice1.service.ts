import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreatePractice1Dto } from './dto/create-practice1.dto';
import { UpdatePractice1Dto } from './dto/update-practice1.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Practice1 } from './entities/practice1.entity';
import { Repository } from 'typeorm';

@Injectable()
export class Practice1Service {
  constructor(
    @InjectRepository(Practice1)
    private readonly practice1Repository: Repository<Practice1>,
  ) {}

  findAll() {
    return this.practice1Repository.find({
      order: { id: 'DESC' },
    });
  }

  async create(createPractice1Dto: CreatePractice1Dto) {
    await this.practice1Repository.insert(createPractice1Dto);
    return this.findAll();
  }

  async update(id: number, updatePractice1Dto: UpdatePractice1Dto) {
    const existingData = await this.practice1Repository.findOne({
      where: { id },
    });
    if (!existingData) {
      throw new NotFoundException(`Data with ID ${id} not found`);
    }
    await this.practice1Repository.update(id, updatePractice1Dto);
    return this.findAll();
  }

  async remove(id: number) {
    if (!id) {
      throw new BadRequestException('id is required');
    }
    const existingData = await this.practice1Repository.findOne({
      where: { id },
    });
    if (!existingData) {
      throw new NotFoundException(`Data with ID ${id} not found`);
    }
    await this.practice1Repository.delete(id);
    return this.findAll();
  }
}
