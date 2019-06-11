import { CHARACTERS } from "../actions/types";

const initialState = {
  data: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CHARACTERS.FETCH_CHARACTERS:
      return {
        ...state,
        data: action.payload
      };

    default:
      return state;
  }
}
