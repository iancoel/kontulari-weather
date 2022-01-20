export interface IUpdateCityAction {
  type: string;
  payload: string;
}

export interface IConsolidatedWeatherObj {
  id: number;
  weather_state_name: string;
  weather_state_abbr: string;
  wind_direction_compass: string;
  created: string;
  applicable_date: string;
  min_temp: number;
  max_temp: number;
  the_temp: number;
  wind_speed: number;
  wind_direction: number;
  air_pressure: number;
  humidity: number;
  visibility: number;
  predictability: number;
}

export interface IParentObj {
  title: string;
  location_type: string;
  woeid: number;
  latt_long: string;
}

export interface ISourcesObj {
  title: string;
  slug: string;
  url: string;
  crawl_rate: number;
}

export interface IResponseData {
  consolidated_weather: IConsolidatedWeatherObj[];
  time: string;
  sun_rise: string;
  sun_set: string;
  timezone_name: string;
  parent: IParentObj;
  sources: ISourcesObj[];
  title: string;
  location_type: string;
  woeid: number;
  latt_long: string;
  timezone: string;
}
