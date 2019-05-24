import React from 'react';
import './App.css';
import {petition} from './services/Petition';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      characters:[]
    }
  }

  componentDidMount() {
    this.fetchPetition();
  }

  fetchPetition() {
    petition()
    .then(data => {
      const newCharacters = data.map((item, index) => {
        return {...item, id: index}
      });

        this.setState({
          characters: newCharacters
        })
      
      console.log('**', newCharacters)
    })
  }

  render() {
    return (
      <div className="App">
        'vamos!'
      </div>
    );
  }
}

export default App;
