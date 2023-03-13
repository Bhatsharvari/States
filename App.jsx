//

import React from "react"
import { Component } from "react"
// import App from './App';

class App extends Component{
    constructor(){
        super()
            this.state={
                username:"prashika"
                 
        }
    }
    render(){
        return(
        <>
             <h1 style={{color:"purple"}}>{this.state.username}</h1>

        </>
        )
    }
}
export default App