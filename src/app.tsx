import * as React from "react";
import * as ReactDOM from "react-dom";

import {List} from "./components/list";
import './styles/appstyles.scss';

interface IListStateManagerState {
  data: [any];
}

interface IListStateManagerProps {
  title: string;
}

class ListStateManager extends React.Component<IListStateManagerProps, IListStateManagerState> {
  constructor(props: IListStateManagerProps) {
    super(props);
    this.state = {data : [] as [any] };
    this.handleSubmit = this.handleSubmit.bind(this);
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

const template =
<div className="main" id= "abdc" >
      <h1>Main Heading</h1>
      <ListStateManager
        title = "Task List">
      </ListStateManager>
</div>;

const root = document.getElementById("main");
ReactDOM.render(template, root);
