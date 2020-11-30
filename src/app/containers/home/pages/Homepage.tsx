import React, { Component } from "react";
import CategoryMenu from "../components/CategoryTabs/CategoryMenu";
import Header from "../components/Header/Header";

interface Props {}
interface State {}

class Homepage extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div>
        <Header />
        <CategoryMenu />
      </div>
    );
  }
}

export default Homepage;
