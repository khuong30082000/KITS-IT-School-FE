import React, { Component } from 'react';

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: {
        created: new Date().toLocaleTimeString(),
      },
      seconds: {
        created: new Date().getSeconds(),
      },
    };
    this.date = '22/8/2022';
  }

  getTime() {
    // const newState = {
    //   ...this.state,
    //   time: {
    //     created: new Date().toLocaleTimeString(),
    //   },
    // };

    // this.setState(newState);
    // this.date = '30/08/2000';

    console.log(this);
  }

  render() {
    return (
      <div>
        <div>Hello, world!</div>
        <h2>It is {this.state.time.created}</h2>
        <h2>It is {this.state.seconds.created}</h2>
        <h3>It is {this.date}</h3>
        <button onClick={this.getTime}>Get Time</button>
      </div>
    );
  }
}
