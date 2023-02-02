import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import homeService from './homeService';
import { HomeState, ICities, IDataWeather, IWeather } from './homeTypes';
import { ErrorCode } from '../commonTypes';

const initialState: HomeState = {
  cities: null,
  weather: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  isSearching: false,
  message: '',
}

export const getCities = createAsyncThunk('home/cities', async (userData:string, thunkAPI) => {
  try {
    return await homeService.getCities(userData)
  } catch (error) {
    console.log(error)
    return thunkAPI.rejectWithValue(ErrorCode.E_UNOTFOUND)
  }
})

export const getWeather = createAsyncThunk('home/weather', async (city: IDataWeather, thunkAPI) => {
  try {
    return await homeService.getWeather(city.lat, city.long)
  } catch (error) {
    console.log(error)
    return thunkAPI.rejectWithValue(ErrorCode.E_UNOTFOUND)
  }
})

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.message = ''
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCities.pending, (state) => {
        state.isLoading = true
        state.cities = null
      })
      .addCase(getCities.fulfilled, (state, action) => {
        state.isLoading = false
        state.cities = action.payload as ICities
        state.isError = action.payload ? false : true
      })
      .addCase(getCities.rejected, (state, action ) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload as string
        state.cities = null
      })
      .addCase(getWeather.pending, (state) => {
        state.isSearching = true
        state.weather = null
      })
      .addCase(getWeather.fulfilled, (state, action) => {
        state.isSearching = false
        state.isSuccess = true
        state.weather = action.payload as IWeather
      })
      .addCase(getWeather.rejected, (state, action ) => {
        state.isSearching = false
        state.isError = true
        state.message = action.payload as string
        state.weather = null
      })
  },
})

export const { reset } = homeSlice.actions

export default homeSlice.reducer
