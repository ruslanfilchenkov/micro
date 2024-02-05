import { ICountry } from 'app/entities/micro/country/country.model';

export interface IRegion {
  id: number;
  regionName?: string | null;
  country?: ICountry | null;
}

export type NewRegion = Omit<IRegion, 'id'> & { id: null };
