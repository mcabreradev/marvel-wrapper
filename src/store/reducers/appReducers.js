import { APP } from '../actions/appActions';

  const initialState = {
    isLoading: false
  };

  export default function (state = initialState, action) {
    switch (action.type) {

      case APP.TOGGLE_LOADING:
        return {
          ...state,
          isLoading: action.payload
        };

      default:
        return state;
    }
  }