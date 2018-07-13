import React, { Component } from 'react';

import AirbnbCard from './AirbnbCard';

import "./App.css";

import Main from './Main';

import AirbnbCardList from './AirbnbCardList';

import Header from './Header';

import Footer from './Footer';

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
         <Main>
          <AirbnbCardList imageUrls={this.state.imageUrls}/>
        </Main>
      <Footer />
      </div>
    );
  }
}

export default App;
