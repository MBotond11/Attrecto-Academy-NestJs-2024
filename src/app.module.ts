/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule} from '@nestjs/typeorm';
import { CourseEntity } from './entities/course.entity';
import { CourseModule } from './course/course.module';
import { UserEntity } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type:'sqlite',
    database: 'database.sqlite',
    entities: [CourseEntity, UserEntity],
    synchronize: true, 
  })
  ,CourseModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
