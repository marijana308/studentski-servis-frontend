import { Student } from './Student';
import { Course } from './Course';

export interface Enrollment {
    id: number;
    completed: boolean;
    grade: number;
    course: Course;
    student: Student;
}
