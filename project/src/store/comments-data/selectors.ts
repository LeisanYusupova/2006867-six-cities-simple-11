import {NameSpace} from '../../const';
import { ReviewType } from '../../types/types';
import {State} from '../../types/state';

export const getComments = (state: State): ReviewType[] => state[NameSpace.Comments].comments;
