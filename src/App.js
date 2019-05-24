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

    const {characters} = this.state;

    return (
      <div className="App">
        <ul className="characters__list">
          {characters.map(item => {
            return(
              <li className="user__item" key={item.id}>
                <img src={item.image} alt={`imagen de ${item.name}`} className="item__img"/>
                <h2 className="item__name">{item.name}</h2>
                <small className="item__house">{item.house}</small>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
