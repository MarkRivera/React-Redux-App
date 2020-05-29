import { GET_JOBS, GET_JOBS_SUCCESS, GET_JOBS_FAIL } from "../actions";

export const initialState = {
  title: "Looking for work?",
  isFetching: false,
  error: "",
  jobs: [],
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        error: "",
        isFetching: true,
      };

    case GET_JOBS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        jobs: action.payload,
      };

    case GET_JOBS_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
}
