import { ILocation, NewLocation } from './location.model';

export const sampleWithRequiredData: ILocation = {
  id: 7375,
};

export const sampleWithPartialData: ILocation = {
  id: 13007,
  postalCode: 'than conceptualize gah',
  city: 'Willbury',
};

export const sampleWithFullData: ILocation = {
  id: 21881,
  streetAddress: 'likewise however than',
  postalCode: 'peer excuse expression',
  city: 'New Dejah',
  stateProvince: 'pillage',
};

export const sampleWithNewData: NewLocation = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
