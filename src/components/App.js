import React, { Component } from 'react';
import Header from "./Header";
import Top from "./Top";
import Main from "./Main";
import Footer from "./Footer";
import List from "./List";

class App extends Component {
  render() {
    return (
      <div>
        <Header List="3 terbaik" />
        <Top />
        <Main />
        <h1>Rendering Elements</h1>
        <List />
        <Footer name="Makanan Nusantara"  tahun="2018"/>
      </div>
    );
  }
}

export default App;
