import React, { Component } from 'react';

import "./AirbnbCard.css";

class AirbnbCard extends Component {
    constructor(props) {
      super(props);
      this.state = {
        likes: 0,
        dislikes: 0,
      };
    }

    render() {
      return (
        <div className="AirbnbCard-container">
          <span>Hello</span>
        </div>
      );
    }
  }

export default AirbnbCard;