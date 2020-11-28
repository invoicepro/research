import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Filter from "./components/Filter";
import Results from "./components/Results";


class App extends Component {

  state = {count:1};

  follow = (n) => {
    if(this.state.count===0)
      this.setState({count:n}); 
    else
      this.setState({count:this.state.count*n});
    }

  unfollow = (n) => {
    this.setState({count:this.state.count/n});
  }

  render() {
    return (<div className="wapper">
    <div className="main-container">
      <div className="header">LOGO</div>
      <div className="container" style={{paddingTop:20,paddingBottom:20}}>
        <div className="row">
          <div className="col-5">
            <Filter count={this.state.count} follow = {this.follow} unfollow = {this.unfollow} />
          </div>
          <div className="col-7" count={this.state.count}>
            <Results count = {this.state.count}/>
          </div>
        </div>
      </div>
      </div>
    </div>);
  }
}

export default App;
