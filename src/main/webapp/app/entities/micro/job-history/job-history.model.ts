import dayjs from 'dayjs/esm';
import { IJob } from 'app/entities/micro/job/job.model';
import { IDepartment } from 'app/entities/micro/department/department.model';
import { IEmployee } from 'app/entities/micro/employee/employee.model';
import { Language } from 'app/entities/enumerations/language.model';

export interface IJobHistory {
  id: number;
  startDate?: dayjs.Dayjs | null;
  endDate?: dayjs.Dayjs | null;
  language?: keyof typeof Language | null;
  job?: IJob | null;
  department?: IDepartment | null;
  employee?: IEmployee | null;
}

export type NewJobHistory = Omit<IJobHistory, 'id'> & { id: null };
