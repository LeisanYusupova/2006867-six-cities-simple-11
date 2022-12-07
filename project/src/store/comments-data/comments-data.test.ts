import { makeFakeComments } from '../../utils/mock';
import { ReviewType } from '../../types/types';
import {fetchCommentsAction } from '../api-actions';
import {commentsData} from './comments-data';

describe('Reducer: comments-data-process', () => {
  it('without additional parameters should return initial state', () => {
    expect(commentsData.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({comments: []});
  });

  it('should update comments', () => {
    const state = {comments: []};
    const newComments: ReviewType[] = makeFakeComments();
    expect(commentsData.reducer(state, {type: fetchCommentsAction.fulfilled.type, payload: newComments}))
      .toEqual({comments: newComments});
  });
});
