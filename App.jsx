//by using constructor()

// import React from "react"
// import { Component } from "react"
// // import App from './App';

// class App extends Component{
    
//     constructor(){
        
//         super()
//         console.log(this);
//             this.state={
//                 username:"prashika"
                 
//         }
//     }
//     render(){
//         return(
            
//         <>
//              <h1 style={{color:"purple"}}>{this.state.username}</h1>

//         </>
//         )
//     }
// }
// export default App

//by using state object

import React from "react"
import { Component } from 'react';

class App extends Component{

    state={
    
        username:"Asha",
        // password:"Ashu2020"
        skills:["java","python","JS"]
    }
    render(){
        console.log(this);
        return(
        <>
        <h2>{this.state.username}</h2>
        <ul>
           {this.state.skills.map((x)=>{
            return <li>{x}</li>
           })}
        </ul>
        {/* <h3>{this.state.password}</h3> */}
        </> 
        )
    }

}
export default App