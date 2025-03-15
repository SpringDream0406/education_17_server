import { Module } from '@nestjs/common';
import { PracticeModule } from './practice1/practice.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
      logging: false, // 쿼리 실행 내역 터미널에 띄움
    }),
    PracticeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
