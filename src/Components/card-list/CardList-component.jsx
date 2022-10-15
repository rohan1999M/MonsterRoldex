import { getValue } from '@testing-library/user-event/dist/utils';
import React, { Component } from 'react'
import Card from './card';
import './cardlist.css';

export default class CardList extends Component {

  render() {
    // console.log(this.props)
    const { cards } = this.props;
    

    console.log(cards)
    return (
      <div className='card-list'>
        {cards.map((val) => {
          // const {id,name,email}=val;
          return (

             <>
             <Card monster={val} />
             </>

            // <div className='card-container' key={id}>
            //   <img
            //     alt={`moster ${name}`}
            //     src={`https://robohash.org/${id}?set=set2&size=180x180`} />
            //   <h3>{name}</h3>
            //   <p>{email}</p>

            // </div>
            
          )
        }
        )
        }




      </div>
    )
  }
}
