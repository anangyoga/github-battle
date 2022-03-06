import React from "react";
import { Component } from "react/cjs/react.production.min";

class LifeCycleComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
    };

    console.log("constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.setState({
      count: 2,
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  render() {
    console.log("render");
    return <button>{this.state.count}</button>;
  }
}
export default LifeCycleComponent;
