import React from "react";
import{ Component } from 'react';

export default class App extends Component {

  state = {
    current: 0,
    total: 0,
    operator: null,
  }

  constructor(props) {
    super(props);

    this.number = this.number.bind(this);
    this.operator = this.operator.bind(this);
    this.equals = this.equals.bind(this);
  }

  number(e) {
    if (this.current > 0)
    this.setState({
    });
  }
  operator(e) {
    this.setState({
    operator: e.value
    });
  }
  equals(e){
    this.setState({
    });
  }

  render() {


    return (
      <div className="calculatorBody">
        <button className="input"></button>
        <button className="buttons" onClick={this.number}>7</button>
        <button className="buttons" onClick={this.number}>8</button>
        <button className="buttons" onClick={this.number}>9</button>
        <button className="buttons" onClick={this.operator}>x</button>
        <button className="buttons" onClick={this.number}>4</button>
        <button className="buttons" onClick={this.number}>5</button>
        <button className="buttons" onClick={this.number}>6</button>
        <button className="buttons" onClick={this.operator}>/</button>
        <button className="buttons" onClick={this.number}>1</button>
        <button className="buttons" onClick={this.number}>2</button>
        <button className="buttons" onClick={this.number}>3</button>
        <button className="buttons" onClick={this.operator}>+</button>
        <button className="buttons equal" > = </button>
        <button className="buttons" onClick={this.number}>0</button>
        <button className="buttons" >C</button>
        <button className="buttons" onClick={this.operator}>-</button>

      </div>
    );
  }

}


