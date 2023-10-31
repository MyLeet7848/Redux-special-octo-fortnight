const { createStore, combineReducers } = require("redux");

//initial state
const initialState = {
  posts: [],
};
const userInitialState = {
  users: [],
};
//action types
const ADD_POST = "ADD_POST";
const REMOVE_POST = "REMOVE_POST";
const ADD_USER = "ADD_USER";
//actions
const addPostAction = (post) => {
  return { type: ADD_POST, payload: post };
};
const removePostAction = (id) => {
  return { type: REMOVE_POST, payload: id };
};
const addUserAction = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};
//reducer
const postReducer = (state = initialState, action) => {
  //   if (action.type === ADD_POST) {
  //     return {
  //       posts: [...state.posts, action.payload],
  //     };
  //   } else if (action.type === REMOVE_POST) {
  //     return {
  //       posts: state.posts.filter((post) => {
  //         return post.id != action.payload;
  //       }),
  //     };
  //   } else {
  //     return state;
  //   }
  switch (action.type) {
    case ADD_POST:
      return { posts: [...state.posts, action.payload] };
    case REMOVE_POST:
      return {
        posts: state.posts.filter((post) => {
          return post.id != action.payload;
        }),
      };
    default:
      return state;
  }
};
const userReducer = (state = userInitialState, action) => {
  if (action.type === "ADD_USER") {
    return { users: [...state.users, action.payload] };
  } else {
    return state;
  }
};
//root reducer
const rootReducer = combineReducers({
  posts: postReducer,
  users: userReducer,
});

//store
const store = createStore(rootReducer);
//subscribe
store.subscribe(() => {
  const data = store.getState();
  console.log(data.posts);
  console.log(data.users);
});
//dispatch
store.dispatch(addPostAction({ id: 1, title: "Best Coooourse Ever" }));
store.dispatch(addPostAction({ id: 2, title: "Best Figooohting Ever" }));
store.dispatch(addPostAction({ id: 3, title: "Best Tteaoooching Ever" }));
store.dispatch(removePostAction(3));
store.dispatch(addUserAction({ id: 1, name: "satoshi" }));
