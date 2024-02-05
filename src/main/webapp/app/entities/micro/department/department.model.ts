import { ILocation } from 'app/entities/micro/location/location.model';
import { IEmployee } from 'app/entities/micro/employee/employee.model';
import { IJobHistory } from 'app/entities/micro/job-history/job-history.model';

export interface IDepartment {
  id: number;
  departmentName?: string | null;
  location?: ILocation | null;
  employees?: IEmployee[] | null;
  jobHistory?: IJobHistory | null;
}

export type NewDepartment = Omit<IDepartment, 'id'> & { id: null };
