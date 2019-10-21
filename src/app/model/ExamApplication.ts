import { Enrollment } from './Enrollment';
import { ExamDateAndPlace } from './ExamDateAndPlace';

export interface ExamApplication {
    id?: number;
    enrollment: Enrollment;
    examDateAndPlace: ExamDateAndPlace;
}
