import React, { Component } from 'react';

import "./AirbnbCard.css";

import PropTypes from 'prop-types';

class AirbnbCard extends Component {
  static propTypes = {
    imageSrc: PropTypes.string.isRequired
  }
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
      const { imageSrc } = this.props;
      return (
        <div className="AirbnbCard-container">
        <section className="AirbnbCard-image">
          <img src={imageSrc} />
        </section>
        <section className="AirbnbCard-location">
        <h3>Location: Rome, Italy, Earth, Milkyway!</h3>
        </section>
          <section className="AirbnbCard-mainheading">
          <h1>Visit the Pope and eat some pizza!</h1>
        </section>
        <section className="AirbnbCard-pricing">
        <h3>Pricing: $333.00</h3>
        </section>
        <section className="AirbnbCard-ratings">
          <button className="AirbnbCard-button addStars"
          onClick={this.addStars.bind(this)}>
&#9734;&#9734;&#9734;&#9734;&#9734;
          </button> 
          <span className="addStars circle">
            {this.state.ratings}
          </span>
        </section>
        </div>
      );
    }
  }

export default AirbnbCard;