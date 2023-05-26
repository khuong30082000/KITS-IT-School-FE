import React, { Component, createRef } from 'react';
import styled from 'styled-components';



export class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
    this.input = createRef();
  }

  onDecrease = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  InDecrease = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.onDecrease}>-</button>
        <span>{this.state.count}</span>
        <button onClick={this.InDecrease}>+</button>
        <form>
          <label>
            Name:
            <input type="text" />
          </label>
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}
