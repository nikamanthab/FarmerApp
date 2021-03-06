import React, { Component } from 'react';
import UserCard from './usercard';
import web3init from './../web3init';
class Track extends Component {
 
  state = {
    search:""
  }
  // componentDidMount = () =>{
  //     web3init().then((d)=>{
  //         if(d.account==0){}
  //     })
  // }

  handleSearchChange = (event)=>{
    this.setState({search:event.target.value})
  }

  handleSearchButton = ()=>{
    //fetch results
    let self= this;
    web3init().then((api)=>{
      console.log(self.state);
      api.track(self.state.search).then((data)=>{
        console.log("hmmmmmmmmmm",data);
      })
    })


  }

  
render() {
    let n=["watermelon","onion seed","garlic peals"];
    return(
        <div>
            <div className="container">
            <h1>Track</h1>
            <p>Search by product</p>
            <div className="row">
            <input className="col-sm-8 form-control paddix" onChange={this.handleSearchChange} type="text"/>
            <button className="col-sm-4 btn wrap paddix" onClick={this.handleSearchButton} >Search</button>
            </div>
            </div>
            <br/>
            <div>
            {
                n.map((val)=>{
                    return(
                        <UserCard name={val}/>
                    )
                })
            }
          </div>
        </div>
    )
 
}
}

export default Track;