import {Action, ActionCreator, AnyAction, createStore} from "redux";

const initialState = {
    counter: 0,
};

const rootReducer = (state: any = initialState, action: MyAction ) => {
    switch (action.type) {
        case "INCREMENT_COUNTER":
        return {...state, counter: state.counter + action.delta};
    }
    return state;
};

export type MyAction = {
    type: "INCREMENT_COUNTER",
    delta: number,
  } | {
    type: "RESET_COUNTER",
};

export const incrementCounter = (delta: number): MyAction => ({
    delta,
    type: "INCREMENT_COUNTER",
  });

const reduxStore = createStore(rootReducer);

test ("expect initial redux state to const", () => {
    expect (reduxStore.getState()).toBe(initialState);
    reduxStore.dispatch(incrementCounter(5));
    expect (reduxStore.getState().counter).toBe(5);
});
