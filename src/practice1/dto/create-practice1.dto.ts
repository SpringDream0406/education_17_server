import { OmitType } from '@nestjs/swagger';
import { Practice1 } from '../entities/practice1.entity';

export class CreatePractice1Dto extends OmitType(Practice1, [
  'id',
  'createdAt',
  'updatedAt',
]) {}
