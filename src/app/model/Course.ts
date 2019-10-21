import { StudyProgramme } from './StudyProgramme';

export interface Course {
    id: number;
    name: string;
    semester: string;
    year: string;
    espb: string;
    studyProgramme: StudyProgramme;
}
