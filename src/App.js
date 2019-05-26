import React from 'react';
import './App.css';
import {petition} from './services/Petition';
import Home from './components/Home';
import Details from './components/Details';
import {Switch, Route} from 'react-router-dom';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state={
      characters:[],
      filterName: ''
    }

    this.handleFilterName = this.handleFilterName.bind(this);
    this.handleResetFilter = this.handleResetFilter.bind(this);
    this.handleSelectFav = this.handleSelectFav.bind(this);
  }

  componentDidMount() {
    this.fetchPetition();

    this.setState ({
      filterName: JSON.parse(localStorage.getItem('filterName')) || ''
    })
  }

  fetchPetition() {
    petition()
    .then(data => {
      const newCharacters = data.map((item, index) => {
        return {...item, id: index, favorite: false}
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
    },
    () => localStorage.setItem('filterName', JSON.stringify(this.state.filterName))
    )
  }

  handleResetFilter() {
    this.setState({
      filterName: ''
    })
  }

  handleSelectFav(item) {
    const newFavItem = item.favorite===false ? {...item, favorite: true} : {...item, favorite: false};

    this.setState((prevState) => {

      const newCharacters = prevState.characters.map(item => 
        (item.id===newFavItem.id ? newFavItem : item)
      );
      
      return({
        characters: newCharacters
      });
    })
    console.log('_^_', newFavItem);
  }

  render() {

    const {characters, filterName} = this.state;

    return (

      <Switch>

        <Route 
          exact path = "/"
          render={() => (
            <Home 
              characters = {characters}
              filterName = {filterName}
              handleFilterName = {this.handleFilterName}  
              handleSelectFav = {this.handleSelectFav}
            />
          )}
        />

        <Route 
          path = "/character/:id"
          render = {(routerProps) => (
            <Details 
              match = {routerProps.match}
              characters = {characters}
              handleResetFilter = {this.handleResetFilter}
            />
          )}
        />

      </Switch>

      
    );
  }
}

export default App;
