import React, { Component } from "react";
import data from "../data/filter-data";

import "bootstrap/dist/css/bootstrap.css";
import Lable from "./Lable";

export default class Filter extends Component {
  render() {
    return (<div>
    Filter ID: {this.props.count}
    <div className="sub-title">Filter By Category</div><hr/>
    <div className="row">
      {data.slice(0,11).map(e=><Lable data = {e} follow = {this.props.follow} unfollow = {this.props.unfollow} />)}
    </div>

    <div className="sub-title">Meal Type</div><hr/>
    <div className="row">
      {data.slice(11,13).map(e=><Lable data = {e} follow = {this.props.follow} unfollow = {this.props.unfollow} />)}
    </div>

    <div className="sub-title">Price Range (Rs)</div><hr/>
    <div  className="row">
      {data.slice(13,20).map(e=><Lable data = {e} follow = {this.props.follow} unfollow = {this.props.unfollow} />)}
    </div>

    </div>
    );
  }
}