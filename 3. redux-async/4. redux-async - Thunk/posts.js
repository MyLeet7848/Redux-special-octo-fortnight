const { createStore, applyMiddleware } = require("redux");
const thunk = require("redux-thunk").default;
const axios = require("axios");
//action constants
const REQUEST_STARTED = "REQUEST_STARTED";
const FETCH_SUCCESS = "FETCH_SUCCESS";
const FETCH_FAILURE = "FETCH_FAILURE";
//initial state
const initialState = {
  posts: [],
  error: "",
  loading: false,
};
//actions
const fetchPostRequest = () => {
  return { type: REQUEST_STARTED };
};
const fetchPostSuccess = (posts) => {
  return { type: FETCH_SUCCESS, payload: posts };
};
const fetchPostFailure = (err) => {
  return { type: FETCH_FAILURE, payload: err };
};

//action to make the request
const fetchPosts = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchPostRequest());
      const data = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      dispatch(fetchPostSuccess(data));
    } catch (error) {
      //err action
      dispatch(fetchPostFailure(error.message));
    }
  };
};

//action creators
//reducers
const postReducers = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_STARTED:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };
    case FETCH_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
  }
};
//rootreducer/combine reducer
//store
const store = createStore(postReducers, applyMiddleware(thunk));
// subscribe == getStore();
store.subscribe(() => {
  const data = store.getState();
  console.log(data);
});
//dispatch
store.dispatch(fetchPosts());
