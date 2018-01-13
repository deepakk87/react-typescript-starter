import * as React from "react";
import * as ReactDOM from "react-dom";

import {ListStateManager } from "../components/liststatemanager";

export class Edit extends React.Component {
    public render() {
        return <div>
        <h1>Edit List</h1>
        <div className="Edit">
            <ListStateManager title = "Task List">
            </ListStateManager>
        </div>;
    </div>;
    }
}
