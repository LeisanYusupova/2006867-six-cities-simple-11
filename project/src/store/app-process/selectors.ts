import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {SortTypes} from '../../const';

export const getCity = (state: State): string=> state[NameSpace.App].city;
export const getSortType = (state: State): SortTypes => state[NameSpace.App].sortType;
export const getError = (state: State): string | null => state[NameSpace.App].error;
