import {
  DELETE_TODO,
  TODO_FAILURE,
  TODO_REQUEST,
  GET_TODO_SUCCESS,
  ADD_TODO_SUCCESS,
  UPDATE_TODO,
} from "./actionTypes";

const initialState = {
  isLoading: false,
  isCompleted: false,
  isError: false,
  todos: [],
};
export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TODO_REQUEST:
      return { ...state, isLoading: true };
    case GET_TODO_SUCCESS:
      return { ...state, isLoading: false, todos: payload };
    case ADD_TODO_SUCCESS:
      return { ...state, isLoading: false, todos: [...state.todos, payload] };
    case UPDATE_TODO:
      return { ...state, isLoading: false, isCompleted: !state.isCompleted };
    case TODO_FAILURE:
      return { ...state, isError: true, isLoading: false };
    case DELETE_TODO:
      return { ...state, isError: false, isLoading: false };
    default:
      return state;
  }
};
