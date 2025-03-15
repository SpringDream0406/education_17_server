import { Module } from '@nestjs/common';
import { Practice1Service } from './practice1.service';
import { Practice1Controller } from './practice1.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Practice1 } from './entities/practice1.entity';
import { Practice2 } from './entities/practice2.entity';
import { Practice2Controller } from './practice2.controller';
import { Practice2Service } from './practice2.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Practice1, //
      Practice2,
    ]),
  ],
  controllers: [
    Practice1Controller, //
    Practice2Controller,
  ],
  providers: [
    Practice1Service, //
    Practice2Service,
  ],
})
export class PracticeModule {}
