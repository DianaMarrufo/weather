export interface HomeState {
  cities: ICities | null;
  weather: IWeather | null; 
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  isSearching: boolean
  message: string;
}

export interface ICities {
  id:              number;
  slug:            string;
  city_slug:       string;
  display:         string;
  ascii_display:   string;
  city_name:       string;
  city_ascii_name: string;
  state:           string;
  country:         string;
  lat:             null | string;
  long:            null | string;
  result_type:     ResultType;
  popularity:      string;
  sort_criteria:   number;
}

export enum ResultType {
  Airport = "airport",
  City = "city",
  Terminal = "terminal",
}

export interface IDataWeather {
  lat: string;
  long: string;
}

export interface IWeather {
  lat:             number;
  lon:             number;
  timezone:        string;
  timezone_offset: number;
  current:         Current;
  daily:           Daily[];
  alerts:          Alert[];
}

export interface Alert {
  sender_name: string;
  event:       string;
  start:       number;
  end:         number;
  description: string;
  tags:        string[];
}

export interface Current {
  dt:         number;
  sunrise:    number;
  sunset:     number;
  temp:       number;
  feels_like: number;
  pressure:   number;
  humidity:   number;
  dew_point:  number;
  uvi:        number;
  clouds:     number;
  visibility: number;
  wind_speed: number;
  wind_deg:   number;
  weather:    WeatherElement[];
  rain:       Rain;
}

export interface Rain {
  "1h": number;
}

export interface WeatherElement {
  id:          number;
  main:        string;
  description: string;
  icon:        string;
}

export interface Daily {
  dt:         number;
  sunrise:    number;
  sunset:     number;
  moonrise:   number;
  moonset:    number;
  moon_phase: number;
  temp:       Temp;
  feels_like: FeelsLike;
  pressure:   number;
  humidity:   number;
  dew_point:  number;
  wind_speed: number;
  wind_deg:   number;
  wind_gust:  number;
  weather:    WeatherElement[];
  clouds:     number;
  pop:        number;
  rain?:      number;
  snow?:      number;
  uvi:        number;
}

export interface FeelsLike {
  day:   number;
  night: number;
  eve:   number;
  morn:  number;
}

export interface Temp {
  day:   number;
  min:   number;
  max:   number;
  night: number;
  eve:   number;
  morn:  number;
}
