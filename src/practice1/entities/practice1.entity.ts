import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import { IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Practice1 {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: '1' })
  id: number;

  @Column()
  @IsNotEmpty()
  @ApiProperty({ example: '홍길동', required: true })
  name: string;

  @Column()
  @IsNotEmpty()
  @ApiProperty({ example: 20, required: true })
  age: number;

  @Column()
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({ example: 'hong@example.com', required: true })
  email: string;

  @Column()
  @IsNotEmpty()
  @ApiProperty({ example: '010-1234-5678', required: true })
  phone: string;

  @Column()
  @IsNotEmpty()
  @ApiProperty({ example: '리액트 심화 과정', required: true })
  program: string;

  @Column()
  @IsNotEmpty()
  @ApiProperty({ example: '2025-04-15', required: true })
  preferredStartDate: string;

  @Column()
  @IsNotEmpty()
  @ApiProperty({ example: '010-8765-4321', required: true })
  emergencyContact: string;

  @Column()
  @IsNotEmpty()
  @ApiProperty({ example: '신용카드', required: true })
  paymentMethod: string;

  @Column()
  @IsNotEmpty()
  @ApiProperty({ example: true, required: true })
  notificationAgreement: boolean;

  @Column({
    type: 'text',
    transformer: {
      to: (value: string[]) => value.join(','),
      from: (value: string) => value.split(','),
    },
  })
  @IsNotEmpty()
  @ApiProperty({ example: ['월', '수', '금'], required: true })
  preferredDay: string[];

  @CreateDateColumn()
  @ApiProperty({ example: '2025-01-01T00:00:00.000Z' })
  createdAt: Date;

  @UpdateDateColumn()
  @ApiProperty({ example: '2025-01-01T00:00:00.000Z' })
  updatedAt: Date;
}
