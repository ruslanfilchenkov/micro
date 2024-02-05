import { IDepartment, NewDepartment } from './department.model';

export const sampleWithRequiredData: IDepartment = {
  id: 28795,
  departmentName: 'admirable',
};

export const sampleWithPartialData: IDepartment = {
  id: 27982,
  departmentName: 'dislodge indeed',
};

export const sampleWithFullData: IDepartment = {
  id: 5221,
  departmentName: 'but for',
};

export const sampleWithNewData: NewDepartment = {
  departmentName: 'even now',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
