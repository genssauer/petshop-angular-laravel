import {CityModel} from './city.model';
import {ProvinceModel} from './province.model';

export interface UnityModel {
    id?: number;
    logo: string;
    razao_social: string;
    fantasy: string;
    email: string;
    cnpj: string;
    ie: string;
    color: string;
    zipcode: string;
    street: string;
    number: string;
    district: string;
    country: string;
    city: string;
    cityObject: CityModel;
    province: string;
    provinceObject: ProvinceModel;
    sunday: boolean;
    monday: boolean;
    tuesday: boolean;
    wednesday: boolean;
    thursday: boolean;
    friday: boolean;
    saturday: boolean;
    hour_sunday_in: string;
    hour_sunday_interval_in: string;
    hour_sunday_interval_out: string;
    hour_sunday_out: string;
    hour_monday_in: string;
    hour_monday_interval_in: string;
    hour_monday_interval_out: string;
    hour_monday_out: string;
    hour_tuesday_in: string;
    hour_tuesday_interval_in: string;
    hour_tuesday_interval_out: string;
    hour_tuesday_out: string;
    hour_wednesday_in: string;
    hour_wednesday_interval_in: string;
    hour_wednesday_interval_out: string;
    hour_wednesday_out: string;
    hour_thursday_in: string;
    hour_thursday_interval_in: string;
    hour_thursday_interval_out: string;
    hour_thursday_out: string;
    hour_friday_in: string;
    hour_friday_interval_in: string;
    hour_friday_interval_out: string;
    hour_friday_out: string;
    hour_saturday_in: string;
    hour_saturday_interval_in: string;
    hour_saturday_interval_out: string;
    hour_saturday_out: string;
    status: string;
}
