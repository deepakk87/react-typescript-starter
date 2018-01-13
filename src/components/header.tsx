import * as React from "react";
import * as ReactDOM from "react-dom";
import { Link } from "react-router-dom";

export class Header extends React.Component {
    public render() {
        return <div className="MainMenu">
           <h1> Check List App </h1>
           <div className="MainItem">
                <Link to="/home">Home</Link>
           </div>
           <div className="MainItem">
                <Link to="/edit">Edit</Link>
           </div>
           <div className="MainItem">
                <Link to="/about">About US</Link>
           </div>
        </div>;
    }
}
