import * as React from 'react';
import * as ReactDOM from 'react-dom';
interface ListProps {
  title? : string;
  data : [any];
}

class List extends React.Component<ListProps> {
  render(){
  return <div>
  {
    this.props.title ? <div> {this.props.title} </div> : null
  }
  {
    this.props.data && this.props.data.length > 0 ?
    this.props.data.map(item => {
      return <div key = {item.key}>{item.value}</div>
    }) : null
  }
  </div>
  }
}

interface ListStateManagerState {
  data  : [any];
}

interface ListStateManagerProps {
  title : string;
}

class ListStateManager extends React.Component<ListStateManagerProps, ListStateManagerState> {
  constructor(props : ListStateManagerProps){
    super(props);
    this.state = {data : [] as [any] };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit ( e : React.FormEvent<HTMLFormElement> ) {
    e.preventDefault();
    var form = e.target as HTMLFormElement;
    var task = form['task'] as HTMLInputElement;
    var valueTxt = task.value;
    // Async call setState. Hence task.value="" may get executed first.
    this.setState(prevState => {
      return { data : [...prevState.data, ...[{key: prevState.data.length + 1, value: valueTxt}]]} as ListStateManagerState;
    });
    task.value = "";
  }

  render() {
    return <div>
        <List data = {this.state.data} title = {this.props.title}></List>
        <form onSubmit = {this.handleSubmit} >
          <input type="text" name="task"/>
          <input type="submit"/>
        </form>
    </div>
  }
}

var template = <div className="main" id= "abdc" >
      <h1>Main Heading</h1>
      <ListStateManager
        title = "Task List">
      </ListStateManager>
    </div>

var root = document.getElementById("main");
ReactDOM.render(template, root);