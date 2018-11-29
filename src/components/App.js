import React, { Component } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import List from "./List";


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Rendering Elements</h1>
        <List />
        <Footer />
      </div>
    );
  }
}

export default App;
