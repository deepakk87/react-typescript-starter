import * as React from "react";
import * as ReactDOM from "react-dom";

import ReactTable from "react-table";
import { ListStateManager } from "../components/liststatemanager";

export class Account extends React.Component {
    public render() {
        const data = [{
            age: 26,
            name: "Tanner Linsley",
          }, {
            age: 23,
            name: "Jason Maurer",
          }];

        const columns = [{
            Header: "Name",
            accessor: "name", // String-based value accessors!
          }, {
            Cell: (props: any)  => <span className="number">{props.value}</span>, // Custom cell components!
            Header: "Age",
            accessor: "age",
        }];

        return <div>
        <h1>Home</h1>
        <div className="Home">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
          cum suscipit provident laboriosam quae maxime aspernatur ut. Ut
           optio eius tenetur praesentium iste pariatur rem, suscipit qui
           eaque esse dignissimos.
        </div>
        <i className="fa fa-area-chart" aria-hidden="true"></i>
        <ReactTable data={data}
                    columns={columns}/>
    </div>;
    }
}
