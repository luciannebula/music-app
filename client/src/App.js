import './App.css';
import React from 'react';
import Home from './components/Home';

class App extends React.Component {
  constructor(props){
  super(props)
  this.state = {
    songs: [],
    
  }
  }
  render(){
    return (
    <div>
      <h1>Lucian's Video Music Box</h1>
      <img src= "./old-school-music-players.jpg" ></img>
      <Home/>
    </div>)
  }
}
//function App() {
  //return (
   // <div className="App">
      
    //</div>
  //);
//}

export default App;
