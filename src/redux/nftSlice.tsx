import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchNfts = createAsyncThunk("nfts/fetchNfts", async () => {
  const res = await axios.get(
    "https://68d61f65c2a1754b42698dc3.mockapi.io/api/v1/nft"
  );
  return res.data;
});

const nftSlice = createSlice({
  name: "product",
  initialState: {
    items: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNfts.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export default nftSlice.reducer;
