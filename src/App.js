import React, { Component } from 'react';
import Notes from './Notes';
import './App.css';
import moment from 'moment';
import { notes1, notes2 } from './data';

const formatTime = 'YYYY-MM-DD HH:mm:ss';
class App extends Component {


  constructor() {
    super();

    this.state = {
      notes: notes1
    }
  }

  componentDidMount() {
    setTimeout(()=>{
     this.setState({
       notes:[...this.state.notes,...notes2]
     }) 
    },10000);
  }


  render() {
    return (
      <div className="App">

          <Notes notes={this.state.notes} />

      </div>
    );
  }
}

export default App;
