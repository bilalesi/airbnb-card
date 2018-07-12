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
        <p>Location: Earth, Milkyway!</p>
        </section>
          <section className="AirbnbCard-mainheading">
          <p>Visit the Pope!</p>
        </section>
        <section className="AirbnbCard-pricing">
        <p>Pricing: $333.00 per night</p>
        </section>
        <section className="AirbnbCard-ratings">
          <button className="AirbnbCard-button addStars"
          onClick={this.addStars.bind(this)}>
&#9733;&#9733;&#9733;&#9733;&#9733;
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