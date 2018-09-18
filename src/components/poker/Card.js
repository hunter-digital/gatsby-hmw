import React from 'react';

import Cardback from '../../assets/poker/cardback.png'


export class Card extends React.Component {
  shouldComponentUpdate(){
    return true;
  }


  render() {
    let {flipped, held, card, hand, floating, holdCard} = this.props;

    return(
      <div style={{width: this.props.width + "px"}}
      className="cardholder h-100  pa1 pa2-l flex flex-column justify-center items-center">
        <div
          className={
            `card-slider w-100 h-100 relative`
          }
          onClick={holdCard}
        >
          <div

            className={
              `card
                ${flipped ? " flipped" : ""}
                ${held ? " held " : " "}
                ${floating ? " floating" : ""}
              `
            }
          >
            <img src={`../../cards/${card}.png`} className="cardfront card-shadow"/>
            <img src={Cardback} className="cardback card-shadow"/>
          </div>
        </div>
      </div>

    )
  }
}
