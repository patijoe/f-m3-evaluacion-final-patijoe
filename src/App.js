import React from 'react';
import './App.css';
import {petition} from './services/Petition';
import Home from './components/Home';

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
      <Home 
        characters = {characters}
        filterName = {filterName}
        handleFilterName = {this.handleFilterName}  
      />
    );
  }
}

export default App;
