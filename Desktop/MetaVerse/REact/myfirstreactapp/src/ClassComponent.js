import React, { Component } from 'react'

export default class ClassComponent extends Component {

    constructor (props) {
        super(props);
        this.state = {
            name: "Iqbal"
        }
    }
  render() {
    return (
      <div>
        
        <h1> This is an Example of Class Compenent: {this.state.name}</h1>

        <p> You are my Jan, Nono Jee</p>
        
        </div>
    )
  }
} 
