import { ActionTypes } from "../constants/action-types";

// exp reducers is a func and it always takes in 2 params = (state, action)

const initialState = {
  products: [],
};

const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};
export default productReducer;
