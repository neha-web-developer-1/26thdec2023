import React, { Component } from 'react'
import User from './User'
export default class Users extends Component {
constructor(props){
    super(props)

    this.state={
        data:null,
        massage:"Data is loading"
    }
    // this.setState({
    //     data:"Data from Api"
    // })
   
}
componentDidMount(){ // runs after render  // call the api  // fetch the data // display the data
    fetch('https://dummyjson.com/users')
    .then(response=>response.json())
    .then(data=>this.setState({data:data.users}))
    
   
   }
  render() { 
    
    return (
      <div className='mt-4'>
        <h2>Users</h2>
        
        <div className='row'>
            {(this.state.data!=null)? this.state.data.map((item)=><div key={item.id} className='col-md-2 mb-3'><User image={item.image} name={item.firstName} />
       </div>):<div className='display-1'>{this.state.massage}</div>}
           
        </div>
      </div>
    )
  }
}

