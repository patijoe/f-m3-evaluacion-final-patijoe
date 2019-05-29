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
      filterName: '',
      filterWand: 0
    }

    this.handleFilterName = this.handleFilterName.bind(this);
    this.handleResetFilter = this.handleResetFilter.bind(this);
    this.handleFilterWand = this.handleFilterWand.bind(this);
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
    },
    () => localStorage.setItem('filterName', JSON.stringify(this.state.filterName))
    )
  }

  handleResetFilter() {
    this.setState({
      filterName: ''
    })
  }

  handleFilterWand (event) {
    let valueWand = event.currentTarget.value;
    if( valueWand==='') {
      valueWand=0;
    }

    this.setState ({
      filterWand: valueWand
    })
  }

  render() {

    const {characters, filterName, filterWand} = this.state;

    return (

      <Switch>

        <Route 
          exact path = "/"
          render={() => (
            <Home 
              characters = {characters}
              filterName = {filterName}
              filterWand = {filterWand}
              handleFilterName = {this.handleFilterName}  
              handleFilterWand = {this.handleFilterWand}
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