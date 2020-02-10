// Dispatch is a server in a restaurant
// thunk is going to do sth. special
import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const UPDATE_SMURFS = "UPDATE_SMURFS";
export const SET_ERROR = "SET_ERROR";

// thunk is realying on us to call that dispatch
export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA });

  setTimeout(() => {
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => {
        console.log("API INFO HERE", response.data);
        dispatch({
          type: UPDATE_SMURFS,
          payload: response.data,
        });
      })
      .catch(err => {
        console.error(
          "You got lost while getting back to the village, try again!",
          err,
        );
        dispatch({
          type: SET_ERROR,
          payload: "You got lost while getting back to the village, try again!",
        });
      });
  }, []);
};

// new action - made a POST request to the server to add a new smurf to my village
export const postData = smurfs => dispatch => {
  axios
    .post("http://localhost:3333/smurfs", smurfs)
    .then(response => {
      dispatch({
        type: UPDATE_SMURFS,
        payload: response.data,
      });
  });
};
