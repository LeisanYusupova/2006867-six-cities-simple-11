
import { cities } from '../../const';
import { SortTypes, NameSpace } from '../../const';
import { createSlice , PayloadAction} from '@reduxjs/toolkit';

const initialState: {
  city: string;
  sortType: SortTypes;
  error: string | null;
} = {
  city: cities[1].name,
  sortType: SortTypes.POPULAR,
  error: null,
};

export const appProcess = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    sortOffers: (state, action: PayloadAction<{sortType: SortTypes}>) => {
      state.sortType = action.payload.sortType;
    },
  },
});

export const {changeCity, sortOffers} = appProcess.actions;

