import { IJob, NewJob } from './job.model';

export const sampleWithRequiredData: IJob = {
  id: 16751,
};

export const sampleWithPartialData: IJob = {
  id: 1584,
  jobTitle: 'Lead Program Engineer',
};

export const sampleWithFullData: IJob = {
  id: 10269,
  jobTitle: 'Human Intranet Planner',
  minSalary: 28073,
  maxSalary: 25501,
};

export const sampleWithNewData: NewJob = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
