import { ICountry } from 'app/entities/micro/country/country.model';
import { IDepartment } from 'app/entities/micro/department/department.model';

export interface ILocation {
  id: number;
  streetAddress?: string | null;
  postalCode?: string | null;
  city?: string | null;
  stateProvince?: string | null;
  country?: ICountry | null;
  department?: IDepartment | null;
}

export type NewLocation = Omit<ILocation, 'id'> & { id: null };
