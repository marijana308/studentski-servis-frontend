import { Course } from './Course';
import { ExamPeriod } from './ExamPeriod';

export interface ExamDateAndPlace {
    id: number;
    date: Date;
    place: string;
    course: Course;
    examPeriod: ExamPeriod;
}
