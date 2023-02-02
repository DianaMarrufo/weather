import axios from 'axios'
import { ErrorCode } from '../commonTypes';

const API_CITIES = 'https://search.reservamos.mx/api/v2/places?q=mon'
const API_WEATHER = 'https://api.openweathermap.org/data/2.5/onecall?exclude=minutely,hourly&units=metric&lang=es&appid=a5a47c18197737e8eeca634cd6acb581'

const getCities = async(userData: string) => {
  const response = await axios.get(`${API_CITIES}?q=${userData}`)
  if (response.data.length >= 0) {
    return response.data[0]
  }
}

const getWeather = async(lat: string, long: string) => {
  const response = await axios.get(`${API_WEATHER}&lat=${lat}&lon=${long}`)
  if (response.data) {
    return response.data
  }
}

const homeService = {
  getCities,
  getWeather,
}

export default homeService