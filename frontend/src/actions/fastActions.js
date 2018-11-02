import { FETCH_FASTS } from "./types";

export const fetchFasts = () => dispatch => {
  fetch("http://localhost:8000/api/fasts")
    .then(response => response.json())
    .then(fasts =>
      dispatch({
        type: FETCH_FASTS,
        payload: fasts
      })
    );
};
