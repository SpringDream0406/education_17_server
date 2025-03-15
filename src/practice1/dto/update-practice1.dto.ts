import { PartialType } from '@nestjs/mapped-types';
import { CreatePractice1Dto } from './create-practice1.dto';

export class UpdatePractice1Dto extends PartialType(CreatePractice1Dto) {}
