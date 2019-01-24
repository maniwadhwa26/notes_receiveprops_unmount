import React, { Component } from 'react';
import './Notes.css';
import moment from 'moment';


const formatTime = 'YYYY-MM-DD HH:mm:ss';
class Notes extends Component {


  constructor(){
    super();

    this.state = {
      lastUpdate: moment().format(formatTime).toString()
    }
  }

  componentWillReceiveProps(nextProps){
    //if the prop notes has changed
    if(nextProps.notes !== this.props.notes){
      this.setState({
        lastUpdate: moment().format(formatTime).toString()
      })
    }
  }


  render() {
    const {notes} = this.props;
    return (
      <div className="Notes">
          <h1>Notes:</h1>

          <ul>
            {notes.map((note, key) => (
              <li key={key}>{note.title} - {note.content}</li>
            ))}
          </ul>

          <p>Last Update: <strong>{this.state.lastUpdate}</strong>
          </p>
        </div>
      );
  }
  componentWillUnmount() {
    console.log('Hasta la vista baby!');
    document.body.style = 'background: black;';
    document.getElementById('unmountMessage').style.color = 'white';
  }
}

export default Notes;
