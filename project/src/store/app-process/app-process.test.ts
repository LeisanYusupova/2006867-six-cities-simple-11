import {City} from '../../types/types';
import { SortTypes } from '../../const';
import { cities } from '../../const';
import { makeFakeCity } from '../../utils/mock';
import {appProcess, changeCity, sortOffers} from './app-process';
describe('Reducer: appProcess', () => {
  const currentCity = cities[0].name;
  it('without additional parameters should return initial state', () => {
    expect(appProcess.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({city: currentCity, sortType: SortTypes.POPULAR});
  });

  it('should change current city', () => {
    const state = {city: currentCity, sortType: SortTypes.POPULAR};
    const newCity: City = makeFakeCity();
    expect(appProcess.reducer(state, changeCity(newCity.name)))
      .toEqual({city: newCity.name, sortType: SortTypes.POPULAR});
  });

  it('should change current sort type', () => {
    const state = {city: currentCity, sortType: SortTypes.POPULAR};
    const sortType = SortTypes.HIGH;
    expect(appProcess.reducer(state, sortOffers({sortType})))
      .toEqual({city: currentCity, sortType: SortTypes.HIGH});
  });
});
