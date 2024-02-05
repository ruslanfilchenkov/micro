import dayjs from 'dayjs/esm';

import { IJobHistory, NewJobHistory } from './job-history.model';

export const sampleWithRequiredData: IJobHistory = {
  id: 20637,
};

export const sampleWithPartialData: IJobHistory = {
  id: 15743,
  startDate: dayjs('2024-02-04T20:16'),
};

export const sampleWithFullData: IJobHistory = {
  id: 26234,
  startDate: dayjs('2024-02-04T12:30'),
  endDate: dayjs('2024-02-04T11:54'),
  language: 'SPANISH',
};

export const sampleWithNewData: NewJobHistory = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
