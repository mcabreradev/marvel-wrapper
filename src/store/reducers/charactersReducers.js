import { CHARACTERS } from "../actions/types";

const initialState = {
  data: [],
  character: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CHARACTERS.FETCH_CHARACTERS:
      return {
        ...state,
        data: action.payload
      };

    case CHARACTERS.FETCH_SINGLE_CHARACTER:
      return {
        ...state,
        character: action.payload
      };

    default:
      return state;
  }
}
