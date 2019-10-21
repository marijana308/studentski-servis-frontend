import { Teacher } from './Teacher';
import { Course } from './Course';

export interface Teaching {
    id: number;
    teacher: Teacher;
    course: Course;
}
