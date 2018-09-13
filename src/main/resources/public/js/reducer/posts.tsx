import {Action, ActionCreator, AnyAction, createStore} from "redux";
import {Posts} from "../state/application-state";
export  const postsReducer = (state: Posts = {data: []}, action: AnyAction ) => {
    switch (action.type) {
        case "ADD_POST":
        return {...state, data: [...state.data, action.post]};
    }
    return state;
};

export const addPostAction = (post: string) => ({type: "ADD_POST", post});
