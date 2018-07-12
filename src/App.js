import React, { Component } from 'react';

import AirbnbCard from './AirbnbCard';

import "./App.css";

import Layout from './Layout';

import Header from './Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrls: [
        "https://placekitten.com/250/250",
        "https://placekitten.com/251/250",
        "https://placekitten.com/250/251",
        "https://placekitten.com/249/250",
        "https://placekitten.com/250/249",
        "https://placekitten.com/251/249",
      ]
    };
  }
  render() {
    const cards = this.state.imageUrls
                      .map((url) => <AirbnbCard imageSrc={url} key={url} />)
    return (
      <div>
        <Header title="AirBnB React Cards" />
        <Layout>
      {cards}
      </Layout>
      </div>
    );
  }
}

export default App;
