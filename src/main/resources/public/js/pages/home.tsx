import * as React from "react";
import * as ReactDOM from "react-dom";
import ReactTable from "react-table";
import {Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from "reactstrap";
export class Home extends React.Component {
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
          <h1 className="h1">Heading 1</h1>
          <h2 className="h2">Heading 2</h2>
          <h3 className="h3">Heading 3</h3>
          <h4 className="h4">Heading 4</h4>
          <h5 className="h5">Heading 5</h5>
          <div className="lead text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
          cum suscipit provident laboriosam quae maxime aspernatur ut. Ut
           optio eius tenetur praesentium iste pariatur rem, suscipit qui
           eaque esse dignissimos.
           </div>
           <blockquote className="blockquote"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Corporis, non deserunt minus obcaecati inventore suscipit, unde dolore cumque consequuntur
           nisi quibusdam, consectetur ad ut qui accusantium! Eaque odit neque qui?</p></blockquote>

           <ul className="list-unstyled">
             <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam cupiditate repudiandae</li>
             <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex reiciendis officiis officia</li>
             <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur provident dignissimos</li>
             <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis temporibus</li>
             <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ab veritatis architecto</li>
           </ul>

           <ul className="list-inline">
             <li className="list-inline-item">Item Number 1</li>
             <li className="list-inline-item">Item Number 2</li>
             <li className="list-inline-item">Item Number 3</li>
             <li className="list-inline-item">Item Number 4</li>
             <li className="list-inline-item">Item Number 5</li>
           </ul>
        </div>
        <div>
      <Card>
        <CardImg top width="100%" src="http://lorempixel.com/640/480/sports/This-is-sporty/"
         alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of
            the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
        <i className="fa fa-area-chart" aria-hidden="true"></i>
        <ReactTable data={data}
                    columns={columns}/>
    </div>;
    }
}
