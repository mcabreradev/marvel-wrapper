// Types
export const APP = {
  TOGGLE_LOADING: "TOGGLE_LOADING",
}

export const loadingAction = (state) => (dispatch) => {
  try {
      dispatch({
          type: APP.TOGGLE_LOADING,
          payload: state
      });
  } catch (error) {
      console.error(error);
  }
};