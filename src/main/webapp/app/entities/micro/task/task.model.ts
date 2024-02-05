import { IJob } from 'app/entities/micro/job/job.model';

export interface ITask {
  id: number;
  title?: string | null;
  description?: string | null;
  jobs?: IJob[] | null;
}

export type NewTask = Omit<ITask, 'id'> & { id: null };
