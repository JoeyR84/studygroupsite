import React, { Component } from "react";
// import router
import Navigator from "./navigator";
import Footer from "./components/layout/Footer";
import Nav from "./components/layout/NavBar";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Navigator />
        <Footer />
      </div>
    );
  }
}

export default App;
