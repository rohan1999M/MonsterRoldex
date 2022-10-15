import React, { Component } from 'react'
import CardList from '../card-list/CardList-component';
import SearchBox from '../search-box/SearchBox-component';

export default class Employee extends Component {

constructor(){
    super();
    this.state={
        Employees:[
       
            {name:'Rohan Mourya',id:'1'},{name:'vedant Holey',id:'2'},{name:'Grish Sawankar',id:'3'},
            {name:'Shivam likhar',id:'4'},{name:'somesh vk',id:'5'},{name:'vedant kulkarni',id:'6'},
        ],
        searchField:'',

    };
}
onSearchEmp = (event)=>{
    const searchField = event.target.value.toLocaleLowerCase();
    // console.log(event.target.value)
    this.setState(()=>{
        return{searchField}
    })
    // console.log(searchField)
}


  render() {
     const {searchField,Employees} = this.state;
     const {onSearchEmp}=this;
    const searchEmp = Employees.filter((i)=>{
        return i.name.toLocaleLowerCase().includes(searchField);
    })

    return (
      <div>
      
      <SearchBox  className='employee-search-box' onChange={onSearchEmp} placeholder='search employee'/>
        <CardList className='card-list' cards = {searchEmp}/>



        {/* Employee-component
        {this.state.Employees.map(emp =>{
            return(
                <h1 key={emp.id}>{emp.name}</h1>
            )
        })
           
        } */}

      </div>
    )
  }
}
