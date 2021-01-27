import React, { Component , Fragment } from 'react'
import './App.css'
import Card from './Components/Card/Card'
import Modal from './Components/Modal/Modal'


export default class App extends Component {
   constructor(){
     super();
     this.state={
       rockets:[],
       loading:true,
           }
   }
        componentDidMount(){
          
          fetch("https://api.spacexdata.com/v4/rockets")
          .then((res)=>res.json())
          .then((data)=> this.setState({rockets:data}) );
          if(this.state.rockets){
            this.setState({loading:false});
          }
        }
  render() {
    return (
        <div className="App container">
        <h1 className="text-light title">React SpaceX  </h1>
        {this.state.loading ? <div class="spinner-border" role="status">
  <span class="sr-only">Loading...</span>
</div>:<div className="row">
        {this.state.rockets.map(rocket =>(
          <Fragment>
            <Card rocket={rocket} />
            <Modal rocket={rocket} />
            
          </Fragment>
        
        ))}
        </div>}


      </div>
    )
  }
}

 