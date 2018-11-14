import { FETCH_FASTS, ADD_FAST, DELETE_FAST } from "../actions/types";

const initialState = {
  items: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_FASTS:
      return {
        ...state,
        items: action.payload
      };
    case ADD_FAST:
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    case DELETE_FAST:
      return {
        ...state,
        items: state.items.filter(fast => fast.id !== action.payload)
      };
    default:
      return state;
  }
}
