import { IRegion, NewRegion } from './region.model';

export const sampleWithRequiredData: IRegion = {
  id: 31428,
};

export const sampleWithPartialData: IRegion = {
  id: 26089,
  regionName: 'ouch',
};

export const sampleWithFullData: IRegion = {
  id: 24079,
  regionName: 'vapid sleepily cauterize',
};

export const sampleWithNewData: NewRegion = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
