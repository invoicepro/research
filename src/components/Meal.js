import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.css";

export default class Meal extends Component {

  render() {
    var remainder = this.props.data.value % this.props.count;
    console.log(remainder);
      if( remainder === 0)
    return (<div className="meal-item" >
    <div><img src={require(`../assets/${this.props.data.lable}.jpg`)}  className="meal-image" alt={`${this.props.data.lable}`} /></div>
    <div className="meal-name">{this.props.data.lable}</div>
    <div className="meal-price">Rs.{this.props.data.price}</div>
    </div>);
    else
    return null;
  }
}