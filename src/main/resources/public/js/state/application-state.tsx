import {combineReducers, createStore} from "redux";
import {postsReducer} from "../reducer/posts";

export class ApplicationState {
    public readonly posts: Posts;
}
// tslint:disable-next-line:max-classes-per-file
export class Posts {
    public readonly data: string[];
}

const rootReducer = combineReducers<ApplicationState>({
    posts: postsReducer,
});

export const reduxStore = createStore(rootReducer);
