import React, { Component } from 'react'
import CardList from './card-list/CardList-component';
import SearchBox from './search-box/SearchBox-component';

export default class Monster extends Component {
 
    constructor(){
        // console.log('constructor')
        super();
        this.state={
            monsters:[],
            searchField: ''
        };
    }
componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=> response.json())
    .then((users)=> this.setState(
        ()=>{
            return {monsters: users}
        },
        // ()=>{
        //     console.log(this.state)
        // }
        
        )
        );
}
onSearchChange = (event)=>{
    const searchField = event.target.value.toLocaleLowerCase();
   //  console.log(searchField);  
    this.setState(()=>{
       return {searchField};
    }
    )
}

  render() {
    // console.log('render')
const {monsters,searchField}=this.state;
const{onSearchChange}=this;

    const filterMonster = monsters.filter((monster)=>{
       return monster.name.toLocaleLowerCase().includes(searchField);
    });
    return (
      <div>
        <br/>

        <SearchBox  className='monster-search-box' onChange={onSearchChange} placeholder='search monster'/>
        <CardList className='card-list' cards = {filterMonster}/>
      





      {/* <input className='search-box' type={'search'} placeholder={'search monster'} onChange = {onSearchChange}
      ></input> */}

      {/* {
        filterMonster.map((monster)=>{
            return (
            <div key={monster.id}>
              <h2>{monster.name}</h2>

            </div>)
        })
      } */}
        
      
       

      </div>
    )
  }
}
