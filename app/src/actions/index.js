import axios from "axios";

export const GET_JOBS = "GET_JOBS";
export const GET_JOBS_SUCCESS = "GET_JOBS_SUCCESS";
export const GET_JOBS_FAIL = "GET_JOBS_FAIL";

export const getJobs = (userInput) => (dispatch) => {
  dispatch({ type: GET_JOBS });
  axios
    .get(
      `https://cors-anywhere.herokuapp.com/jobs.github.com/positions.json?description=${userInput.title}&location=${userInput.city}`
    )
    .then((res) => dispatch({ type: GET_JOBS_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: GET_JOBS_FAIL, payload: err.message }));
};
