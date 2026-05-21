import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Manga } from '../../types/manga'


export interface CollectionState {
    Items: Manga[]
    Name: string
    Type: string
}

const initialState: CollectionState = {
    Items: [],
    Name: "", 
    Type: "",
}

export const collectionSlice = createSlice({
    name: "collection",
    initialState,
    reducers: {
      addToCollection: (state, action: PayloadAction<Manga>) => {
        state.Items.push(action.payload)
      },
   /*   editCollection: (state, action: PayloadAction<string>) => {
        state[action.type] = action.payload
      }, */
      addCollection: (state) => {
        const savedCollection = {...state}
      }

    }
})