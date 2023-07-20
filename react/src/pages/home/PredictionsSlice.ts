import { createSlice } from '@reduxjs/toolkit'
export interface Prediction {
  id: number
  prediction: string
}

export interface GameState {
  predictions: Prediction[]
}

const initialState: GameState = {
  predictions: []
}

export const predictionsSlice = createSlice({
  name: 'predictions',
  initialState,
  reducers: {
    update: (state, action) => {
      const i = state.predictions.findIndex(arrayItem => arrayItem.id === action.payload.id);
      if (i > -1) state.predictions[i] = action.payload;
      else state.predictions.push(action.payload);
    },
  },
})

export const { update } = predictionsSlice.actions

export default predictionsSlice.reducer
