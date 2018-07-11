import React, { Component } from 'react';

import "./AirbnbCard.css";

class AirbnbCard extends Component {
    constructor(props) {
      super(props);
      this.state = {
        ratings: 0,
      };
    }

  addStars(){
      this.setState({
          ratings: this.state.ratings  + 1
      })
  }

    render() {
      return (
        <div className="AirbnbCard-container">
        <section className="AirbnbCard-image">
          <img src="https://via.placeholder.com/250x250" />
        </section>
        <section className="AirbnbCard-location">
        <h3>Location</h3>
        </section>
          <section className="AirbnbCard-mainheading">
          <h1>Main heading</h1>
        </section>
        <section className="AirbnbCard-pricing">
        <h4>Pricing</h4>
        </section>
        <section className="AirbnbCard-ratings">
          <button className="AirbnbCard-button addStars"
          onClick={this.addStars.bind(this)}>
Ratings
          </button>
          <span>&#9734;&#9734;&#9734;&#9734;&#9734;</span>
          <span className="addStars circle">
            {this.state.ratings}
          </span>
        </section>
        </div>
      );
    }
  }

export default AirbnbCard;