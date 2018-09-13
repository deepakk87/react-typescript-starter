import * as React from "react";
import {connect} from "react-redux";

import { ApplicationState, Posts } from "../state/application-state";
import { List } from "./list";

import {addPostAction} from "../reducer/posts";

export interface IListStateManagerProps {
    title: string;
    posts: Posts;
    addPost: (post: string) => void;
}

// tslint:disable-next-line:class-name
class _ListStateManager extends React.Component<IListStateManagerProps> {
    constructor(props: IListStateManagerProps) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    public handleSubmit(e: React.FormEvent<HTMLFormElement> ) {
      e.preventDefault();
      const form = e.target as HTMLFormElement;
      const task = form.task as HTMLInputElement;
      const valueTxt = task.value;
      // Async call setState. Hence task.value="" may get executed first.
      this.props.addPost(valueTxt);
      task.value = "";
    }

    public render() {
      return <div>
          <List data = {this.props.posts.data} title = {this.props.title}></List>
          <form onSubmit = {this.handleSubmit} >
            <input type="text" name="task"/>
            <input type="submit"/>
          </form>
      </div>;
    }
}

const mapStateToProps = (state: ApplicationState)  => {
    return {
        posts : state.posts,
    };
};

const mapDispatchToProps = (dispatch: any) => {
     return {
        addPost: (post: string) => {
          dispatch(addPostAction(post));
        },
    };
};

export const ListStateManager = connect(mapStateToProps, mapDispatchToProps)(_ListStateManager);
