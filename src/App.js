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
      filter:''
    }

    this.handleFilterName = this.handleFilterName.bind(this);
    this.handleResetFilter = this.handleResetFilter.bind(this);
    this.handleFilterHair = this.handleFilterHair.bind(this);
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

  handleFilterHair(event) {
    const valueHair = event.currentTarget.value;
    

    this.setState({
      filter: valueHair
    })
  }

  handleResetFilter() {
    this.setState({
      filterName: ''
    })
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
              handleFilterHair={this.handleFilterHair}
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