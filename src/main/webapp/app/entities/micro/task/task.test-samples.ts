import { ITask, NewTask } from './task.model';

export const sampleWithRequiredData: ITask = {
  id: 6276,
};

export const sampleWithPartialData: ITask = {
  id: 32634,
  title: 'however unlike',
  description: 'duh approximate whereas',
};

export const sampleWithFullData: ITask = {
  id: 29524,
  title: 'underneath creepy',
  description: 'huzzah questionable',
};

export const sampleWithNewData: NewTask = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
