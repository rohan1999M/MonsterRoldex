import React, { Component } from 'react'
import './card-style.css';

export default class Card extends Component {
  render() {
    const {id,name,email} = this.props.monster
    return (
        <div className='card-container' key={id}>
        <img
          alt={`moster ${name}`}
          src={`https://robohash.org/${id}?set=set2&size=180x180`} />
        <h3>{name}</h3>
        <p>{email}</p>

      </div>
    )
  }
}
