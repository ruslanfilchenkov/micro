import { ITask } from 'app/entities/micro/task/task.model';
import { IEmployee } from 'app/entities/micro/employee/employee.model';
import { IJobHistory } from 'app/entities/micro/job-history/job-history.model';

export interface IJob {
  id: number;
  jobTitle?: string | null;
  minSalary?: number | null;
  maxSalary?: number | null;
  tasks?: ITask[] | null;
  employee?: IEmployee | null;
  jobHistory?: IJobHistory | null;
}

export type NewJob = Omit<IJob, 'id'> & { id: null };
