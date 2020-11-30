import React, { Component } from "react";
import Header from "../components/Header";

interface Props {}
interface State {}

class Homepage extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default Homepage;
