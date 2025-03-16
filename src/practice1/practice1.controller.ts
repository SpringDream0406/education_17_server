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
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Practice1 } from './entities/practice1.entity';

@Controller('practice1')
export class Practice1Controller {
  constructor(private readonly practiceService: Practice1Service) {}

  @Get()
  @ApiOperation({
    summary: '신청자 정보 가져오기',
    description: 'id 기준 desc',
  })
  @ApiResponse({ status: 200, type: [Practice1] })
  findAll() {
    return this.practiceService.findAll();
  }

  @Post()
  @ApiOperation({ summary: '신청자 정보 생성' })
  @ApiResponse({ status: 201, type: [Practice1] })
  create(@Body() createPractice1Dto: CreatePractice1Dto) {
    return this.practiceService.create(createPractice1Dto);
  }

  @Patch(':id')
  @ApiOperation({ summary: '신청자 정보 수정' })
  @ApiResponse({ status: 200, type: [Practice1] })
  update(
    @Param('id') id: string,
    @Body() updatePractice1Dto: UpdatePractice1Dto,
  ) {
    return this.practiceService.update(+id, updatePractice1Dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: '신청자 정보 삭제' })
  @ApiResponse({ status: 200, type: [Practice1] })
  remove(@Param('id') id: string) {
    return this.practiceService.remove(+id);
  }
}
