import {createSlice} from "@reduxjs/toolkit";


const searchSlice = createSlice({
  name: "search",
  initialState: { search : false},
  reducers: {
    setSearch(state, action) {
      state.search = action.payload
    }
  }
})

export const { setSearch } = searchSlice.actions;
export default searchSlice.reducer;