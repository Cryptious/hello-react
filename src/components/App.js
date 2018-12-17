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
        <Footer name="Makanan Nusantara"  tahun="2018"/>
      </div>
    );
  }
}

export default App;
