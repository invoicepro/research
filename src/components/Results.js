import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.css";
import Meal from "./Meal";
import data from "../data/meals";

export default class Results extends Component {

  render() {
    return (<div>
        <div className="row">
      {data.map(e=>
        <Meal data={e} key={e.id} count={this.props.count}/>
      )}

      </div>
    </div>);
  }
}