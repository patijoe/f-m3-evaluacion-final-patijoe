import React from 'react';
import './App.css';
import {petition} from './services/Petition';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state={
      characters:[],
      filterName: ''
    }

    this.handleFilterName = this.handleFilterName.bind(this);
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

  handleFilterName(event){
    const valueName = event.currentTarget.value;

    this.setState ({
      filterName: valueName
    })
  }

  render() {

    const {characters, filterName} = this.state;

    return (
      <div className="App">

        <label htmlFor="filter_name">Busca tu personaje preferido por nombre</label>
        <input id="filter_name" type="text" className="filter__name" onChange={this.handleFilterName} />

        <ul className="characters__list">
          {characters
          .filter(item => item.name.includes(filterName))
          .map(item => {
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
