import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.css";

export default class Lable extends Component {

    state = {selected:false};

  render() {
      if(!this.state.selected)
      return (<button className="lable-not-selected btn border shadow" onClick={e=>{this.props.follow(this.props.data.value);this.setState({selected:true})}}>
      {this.props.data.lable}
    </button>);
    else
    return (<button className="lable-selected btn border shadow" onClick={e=>{this.props.unfollow(this.props.data.value);this.setState({selected:false})}}>
      {this.props.data.lable}
    </button>);
  }
}