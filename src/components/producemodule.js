import React, { Component }  from 'react';

class Producemodule extends Component {

    constructor(props){
        super(props);

        this.state = {
            name:"",
            weight:"",
            quantity:0,
            manufacturing:new Date(),
            expiry:new Date()
        }
    }     

  

    // componentDidMount=async ()=>{
       
    // }

    // generaterandomno = ()=>{
    //     const min=1000; 
    //     const max=9999;  
    //     let random =Math.floor(Math.random() * (+max - +min)) + +min; 
    //     return random;  
    // }


    handleNameOnChange = (event)=>{
        this.setState({name:event.target.value})
    }

    handleWeightOnChange = (event)=>{
        this.setState({weight:event.target.value})
    }

    handleQuantityOnChange =(event)=>{
        this.setState({quantity:event.target.value})
    }

    handleManOnChange =(event)=>{
        this.setState({manufacturing:event.target.value})
    }

    handleExpiryOnChange =(event)=>{
        this.setState({expiry:event.target.value})
    }
    // handleOtpOnChange = (event) =>{
    //     this.setState({otp:event.target.value})
    // }

    handleJoinClick = ()=>{
        console.log(this.state.name);
        console.log(this.state.weight);
        console.log(this.state.quantity);
        console.log(this.state.manufacturing);
        console.log(this.state.expiry);

        //web3 create user function call............
        // web3.eth.getAccounts().then((d)=>{
        //     lib.init(d[0]).signUp(this.state.username, this.state.access==="manufactorer", this.state.phoneno, this.state.email)
        //     .then(c=>console.log).catch(err=>{console.log(err)});
        // });


        // navigate(`/userpage/${this.state.email}/${this.state.username}`)
    }

    // handleInputClick1 = () =>{
    //     this.setState({access:"manufactorer"})
    // }

    // handleInputClick2 = () =>{
    //     this.setState({access:"seller"})
    // }

    render() {
        return (
        <div>
            <div className="producemodule">
                <form  className="productform" name="productform">
                    <h2>Produce items in Blockchain</h2>
                    <ul className="noBullet">
                        <li>
                            <label htmlFor="name"></label>
                            <input type="text" className="inputFields" id="name" name="name" placeholder="name" onChange={this.handleNameOnChange} required/>
                        </li>
                        <li>
                            <label htmlFor="weight"></label>
                            <input type="text" className="inputFields" id="weight" name="weight" placeholder="name" onChange={this.handleWeightOnChange} required/>
                        </li>
                        <li>
                            <label htmlFor="quantity"></label>
                            <input type="text" className="quantity" id="quantity" name="quantity" placeholder="quantity" onChange={this.handleQuantityOnChange} required/>
                        </li>
                        <li>
                            <label htmlFor="manufacturing"></label>
                            <input type="date" className="manufacturing" id="manufacturing" name="manufacturing" placeholder="manufacturing" onChange={this.handleManOnChange} required/>
                        </li>
                        <li>
                            <label htmlFor="expiry"></label>
                            <input type="date" className="expiry" id="expiry" name="expiry" placeholder="expiry" onChange={this.handleExpiryOnChange} required/>
                        </li>
                        <li id="center-btn">
                            <input id="join-btn" value="Join" onClick={this.handleJoinClick} />
                        </li>
                    </ul>
                </form>            
            </div>
                
        </div>
        );
    }
}

export default Producemodule;





