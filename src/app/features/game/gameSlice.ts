import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

interface GameState {
    board: string[][],
    player : string,
  }
  
  const initialState: GameState = {
    board: new Array(3).fill(new Array(3).fill('')),
    player : 'x' ,
  }


  

  export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
      markCell: (state, action: PayloadAction<{indexRow: number , index : number}>) => {
        const {indexRow , index  } = action.payload
        state.board[indexRow][index] = state.player;
        state.player === 'x' ? 'o' : 'x' 
        //togglePlayer()
      },
      toggleplayer : (state) => {
          state.player === 'x' ? 'y' : 'x' 
      },
    },
  })
  

  export const { markCell } = gameSlice.actions
  export const selectCount = (state: RootState) => state.game.board



export default gameSlice.reducer