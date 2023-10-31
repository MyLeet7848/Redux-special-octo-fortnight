const { createStore, applyMiddleware } = require("redux");
const loggerMiddleware = require("redux-logger").createLogger();

//custom middleware
const customLogger = () => {
  return (next) => {
    return (action) => {
      console.log("Action fired", action);
      next(action);
    };
  };
};

//initial state
const initialState = {
  posts: [],
};
//actions
const fetchPostRequest = () => {
  return { type: "REQUEST_STARTED" };
};
const fetchPostSuccess = () => {
  return { type: "FETCH_SUCCESS" };
};
const fetchPostFailure = () => {
  return { type: "FETCH_FAILURE" };
};

//action constants
//action creators
//reducers
const postReducers = (state = initialState, action) => {
  switch (action.type) {
    case "REQUEST_STARTED":
      return {
        posts: ["HTML"],
      };
  }
};
//rootreducer/combine reducer
//store
const store = createStore(postReducers, applyMiddleware(customLogger));
// subscribe == getStore();
store.subscribe(() => {
  const data = store.getState();
  console.log("data from subscribe = " + data);
});
//dispatch
store.dispatch(fetchPostRequest());
