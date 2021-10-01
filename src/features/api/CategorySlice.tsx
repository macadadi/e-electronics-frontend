import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";

export interface Istock {
  name: string;
  brand: string;
  price: number;
  category: string;
  description: string;
}
export interface productState {
  status: "idle" | "loading" | "failed" | "fullfiled";
  product: Istock[];
}

const initialState: productState = {
  status: "idle",
  product: [],
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
const url = "http://localhost:8000";
export const getCategory = createAsyncThunk(
  "product/getCategory",
  async (query: string) => {
    const response = await fetch(`${url}${query}/`, {
      method: "GET",
      headers: { "Content-type": "application/json;charset=UTF-8" },
    }).then((data) => {
      return data.json();
    });
    // The value we return becomes the `fulfilled` action payload
    return response;
  }
);

export const categorySlice = createSlice({
  name: "category",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // increment: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.product += 1;
    // },
    // decrement: (state) => {
    //   state.product -= 1;
    // },
    // // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.product += action.payload;
    // },
  },

  extraReducers: (result) => {
    result
      .addCase(getCategory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCategory.fulfilled, (state, action) => {
        state.status = "fullfiled";
        state.product = action.payload;
      })
      .addCase(getCategory.rejected, (state) => {
        state.status = "failed";
      });
  },
});

// export const { increment, decrement, incrementByAmount } = productSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state: RootState) => state.category.product;

export default categorySlice.reducer;
