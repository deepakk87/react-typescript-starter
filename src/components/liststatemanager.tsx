import * as React from "react";
import * as ReactDOM from "react-dom";

import { List } from "./list";

export interface IListStateManagerState {
    data: [any];
}

export interface IListStateManagerProps {
    title: string;
}

export class ListStateManager extends React.Component<IListStateManagerProps, IListStateManagerState> {
    constructor(props: IListStateManagerProps) {
      super(props);
      this.state = {data : [] as [any] };
      this.handleSubmit = this.handleSubmit.bind(this);
      const data: [number] = undefined;
      // tslint:disable-next-line:no-console
      console.log(data);
    }

    public handleSubmit(e: React.FormEvent<HTMLFormElement> ) {
      e.preventDefault();
      const form = e.target as HTMLFormElement;
      const task = form.task as HTMLInputElement;
      const valueTxt = task.value;
      // Async call setState. Hence task.value="" may get executed first.
      this.setState((prevState) => {
        return {
          data : [...prevState.data, ...[{key: prevState.data.length + 1, value: valueTxt}]],
        } as IListStateManagerState;
      });
      task.value = "";
    }

    public render() {
      return <div>
          <List data = {this.state.data} title = {this.props.title}></List>
          <form onSubmit = {this.handleSubmit} >
            <input type="text" name="task"/>
            <input type="submit"/>
          </form>
      </div>;
    }
}
