// Reducer is like a chef, takes your order and produces a dish - to return new state
import { FETCH_DATA, UPDATE_SMURFS, SET_ERROR } from "../actions";

const initialState = {
  smurfs: [],
  isFetchingData: false,
  error: "",
};

// Action creators - my actions are objects
// Actions are like my orders in a restaurant
// return new state based on the incoming action.type
export const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        isFetchingData: true,
        smurfs: [],
      };
    case UPDATE_SMURFS:
      return {
        ...state,
        smurfs: action.payload,
        isFetchingData: false,
      };
    case SET_ERROR:
      return {
        ...state,
        isFetchingData: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
// default is returning the orginal version of the state instead of returning null or undefined
