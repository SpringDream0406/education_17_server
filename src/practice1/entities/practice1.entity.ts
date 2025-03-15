import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import { IsNotEmpty } from 'class-validator';

@Entity()
export class Practice1 {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  name: string;

  @Column()
  @IsNotEmpty()
  age: number;

  @Column()
  @IsNotEmpty()
  email: string;

  @Column()
  @IsNotEmpty()
  phone: string;

  @Column()
  @IsNotEmpty()
  program: string;

  @Column()
  @IsNotEmpty()
  preferredStartDate: string;

  @Column()
  @IsNotEmpty()
  emergencyContact: string;

  @Column()
  @IsNotEmpty()
  paymentMethod: string;

  @Column()
  @IsNotEmpty()
  notificationAgreement: boolean;

  @Column({
    type: 'text',
    transformer: {
      to: (value: string[]) => value.join(','),
      from: (value: string) => value.split(','),
    },
  })
  @IsNotEmpty()
  preferredDay: string[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
