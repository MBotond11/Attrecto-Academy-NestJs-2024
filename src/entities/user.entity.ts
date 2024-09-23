import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CourseEntity } from './course.entity';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  veznev: string;

  @Column()
  kernev: string;

  @Column()
  password: string;

  @OneToOne(() => CourseEntity)
  @JoinColumn()
  courseEntity: CourseEntity;
}
