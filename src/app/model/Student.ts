import { StudyProgramme } from './StudyProgramme';

export interface Student {
    id?: number;
    firstname: string;
    lastname: string;
    indeks?: string;
    studyProgramme?: StudyProgramme;
    semester?: string;
    year?: string;
    phone: string;
    email: string;
    address: string;
    birthday?: Date;
    birthPlace: string;
    user_id?: number;
    paymentSum?: number;
}
