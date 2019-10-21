import { Student } from './Student';

export interface Payment {
    id: number;
    amount: number;
    date: Date;
    student: Student;
}
