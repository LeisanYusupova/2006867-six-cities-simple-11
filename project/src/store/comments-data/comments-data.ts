import {fetchCommentsAction} from '../api-actions';
import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import { ReviewType } from '../../types/types';

const initialState: {
  comments: ReviewType[];
} = {
  comments: [],
};

export const commentsData = createSlice({
  name: NameSpace.Comments,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCommentsAction.fulfilled, (state, action) => {
        state.comments = action.payload;
      });
  }
});
