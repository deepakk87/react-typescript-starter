import * as React from "react";
import * as ReactDOM from "react-dom";
export interface IListProps {
  title?: string;
  data: string [];
}

export class List extends React.Component<IListProps> {
  public render() {
  return <div>
  {
    this.props.title ? <div> {this.props.title} </div> : null
  }
  {
    this.props.data && this.props.data.length > 0 ?
    this.props.data.map((item, index) => {
      return <div className="list-item" key = {index}>{item}</div>;
    }) : null
  }
  </div>;
  }
}
