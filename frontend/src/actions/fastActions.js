import { FETCH_FASTS, ADD_FAST, DELETE_FAST } from "./types";

export const fetchFasts = () => dispatch => {
  fetch("http://localhost:8000/api/fasts/")
    .then(response => response.json())
    .then(fasts =>
      dispatch({
        type: FETCH_FASTS,
        payload: fasts
      })
    );
};

// TODO: Make sure item, gets added to the right place, ordered by date
export const addFast = fast => dispatch => {
  fetch("http://localhost:8000/api/fasts/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(fast)
  })
    .then(response => response.json())
    .then(fast =>
      dispatch({
        type: ADD_FAST,
        payload: fast
      })
    );
};

export const deleteFast = fastId => dispatch => {
  fetch(`http://localhost:8000/api/fasts/${fastId}/`, {
    method: "DELETE"
  }).then(() =>
    dispatch({
      type: DELETE_FAST,
      payload: fastId
    })
  );
};
