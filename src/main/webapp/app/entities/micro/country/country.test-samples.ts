import { ICountry, NewCountry } from './country.model';

export const sampleWithRequiredData: ICountry = {
  id: 7572,
};

export const sampleWithPartialData: ICountry = {
  id: 14195,
};

export const sampleWithFullData: ICountry = {
  id: 29065,
  countryName: 'script absolve ah',
};

export const sampleWithNewData: NewCountry = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
