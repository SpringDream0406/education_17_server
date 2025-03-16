import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { Practice1Service } from './practice1.service';
import { CreatePractice1Dto } from './dto/create-practice1.dto';
import { UpdatePractice1Dto } from './dto/update-practice1.dto';

@Controller('practice1')
export class Practice1Controller {
  constructor(private readonly practiceService: Practice1Service) {}

  @Get()
  findAll() {
    return this.practiceService.findAll();
  }

  @Post()
  create(@Body() createPractice1Dto: CreatePractice1Dto) {
    return this.practiceService.create(createPractice1Dto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePractice1Dto: UpdatePractice1Dto,
  ) {
    return this.practiceService.update(+id, updatePractice1Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.practiceService.remove(+id);
  }
}
