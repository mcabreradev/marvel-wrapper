import { APP, CHARACTERS } from "./types";

// Utils
import { getAllCharacters } from "../../utils/api";

// Actions
export const loadingAction = state => dispatch => {
  try {
    dispatch({
      type: APP.TOGGLE_LOADING,
      payload: state
    });
  } catch (error) {
    console.error(error);
  }
};

// fetch characters
export const fetchCharactersAction = () => async (dispatch, getState) => {
  dispatch({
    type: APP.TOGGLE_LOADING,
    payload: true
  });

  try {
    const params = {
      limit: 30
    };
    const response = await getAllCharacters(params);
    const characters = response.data.data.results;

    dispatch({
      type: CHARACTERS.FETCH_CHARACTERS,
      payload: characters
    });

    dispatch({
      type: APP.TOGGLE_LOADING,
      payload: false
    });
  } catch (err) {
    console.error(err);
    dispatch({
      type: APP.TOGGLE_LOADING,
      payload: false
    });
  }
};
