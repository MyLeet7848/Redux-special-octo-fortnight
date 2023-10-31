const { createStore } = require("redux");

//Initial state

const initialState = {
  count: 0,
};
//actions - actions - action-creaters
//increment
//decrement
//reset
//increaseByAmount
//action
//Action cretor
const incrementAction = () => {
  return { type: "INCREMENT" };
};

const decrementAction = () => {
  return { type: "DECREMENT" };
};

const resetAction = () => {
  return { type: "RESET" };
};

const increaseByAmtAction = () => {
  return { type: "INCREASE_BY_AMOUNT" };
};
//reducers
const counterReducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return {
      count: state.count + 1,
    };
  } else if (action.type === "DECREMENT") {
    return {
      count: state.count - 1,
    };
  } else if (action.type === "RESET") {
    return {
      count: (store.count = 0),
    };
  }
};
//store
const store = createStore(counterReducer);

// //get state
// const stateData = state.getState();

//subscribe the store
store.subscribe(() => {
  const data = store.getState();
  console.log(data);
});
//dispatch action
store.dispatch(incrementAction());
store.dispatch(incrementAction());
store.dispatch(incrementAction());
store.dispatch(incrementAction());
store.dispatch(incrementAction());
store.dispatch(decrementAction());
store.dispatch(resetAction());
