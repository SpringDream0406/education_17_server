import { OmitType } from '@nestjs/mapped-types';
import { Practice1 } from '../entities/practice1.entity';

export class CreatePractice1Dto extends OmitType(Practice1, [
  'id',
  'createdAt',
  'updatedAt',
]) {}
