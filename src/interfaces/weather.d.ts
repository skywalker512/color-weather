export interface IWeatheAlarm {
  alarm_type: string,
  alarm_level: string,
  alarm_content: string,
}

export interface IWeatheHours {
  hours: string,
  wea: string,
  wea_img: string,
  tem: string,
  win: string,
  win_speed: string,
}

export interface IWeatheIndex {
  title: string,
  level: string,
  desc: string,
}

export interface IWeatherData {
  day: string,
  date: string,
  week: string,
  wea: string,
  wea_img: string,
  wea_day: string,
  wea_day_img: string,
  wea_night: string,
  wea_night_img: string,
  tem: string,
  tem1: string,
  tem2: string,
  humidity: string,
  visibility: string,
  pressure: string,
  win: string[],
  win_speed: string,
  sunrise: string,
  sunset: string,
  air: string,
  air_level: string,
  air_tips: string,
  alarm: IWeatheAlarm,
  hours: IWeatheHours[],
  index: IWeatheIndex,
}
export interface IWeather {
  cityid: string,
  city: string,
  cityEn: string,
  country: string,
  countryEn: string,
  update_time: string,
  data: IWeatherData[]
}





// export interface IWeather {
//   basic:string
//   daily_forecast: IWeatherDailyForecast[]
//   lifestyle: IWeatherLifestyle[]
//   now: IWeatherNow
//   status: string
//   update: IWeatherUpdate
// }


// export interface IWeatherBasic {
//   admin_area: string
//   cid: string
//   cnty: string
//   lat: string
//   location: string
//   lon: string
//   parent_city: string
//   tz: string
// }

// export interface IWeatherDailyForecast {
//   cond_code_d: string
//   cond_code_n: string
//   cond_txt_d: string
//   cond_txt_n: string
//   date: string
//   hum: string
//   mr: string
//   ms: string
//   pcpn: string
//   pop: string
//   pres: string
//   sr: string
//   ss: string
//   tmp_max: string
//   tmp_min: string
//   uv_index: string
//   vis: string
//   wind_deg: string
//   wind_dir: string
//   wind_sc: string
//   wind_spd: string
// }

// export interface IWeatherLifestyle {
//   brf: string
//   txt: string
//   type: string
// }

// export interface IWeatherNow {
//   cloud: string
//   cond_code: string
//   cond_txt: string
//   fl: string
//   hum: string
//   pcpn: string
//   pres: string
//   tmp: string
//   vis: string
//   wind_deg: string
//   wind_dir: string
//   wind_sc: string
//   wind_spd: string
// }

// export interface IWeatherUpdate {
//   loc: string
//   utc: string
// }