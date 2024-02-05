import dayjs from 'dayjs/esm';

import { IEmployee, NewEmployee } from './employee.model';

export const sampleWithRequiredData: IEmployee = {
  id: 27574,
};

export const sampleWithPartialData: IEmployee = {
  id: 8287,
  firstName: 'Zelma',
  email: 'Kathryn.Hills94@yahoo.com',
  hireDate: dayjs('2024-02-04T12:17'),
};

export const sampleWithFullData: IEmployee = {
  id: 20867,
  firstName: 'Ara',
  lastName: 'Schaefer',
  email: 'Millie_Kutch19@hotmail.com',
  phoneNumber: 'ick persuade over',
  hireDate: dayjs('2024-02-04T20:30'),
  salary: 25017,
  commissionPct: 11338,
};

export const sampleWithNewData: NewEmployee = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
