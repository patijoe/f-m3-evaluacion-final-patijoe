import React from 'react';
import Filter from './Filter';
import {Link} from 'react-router-dom';

class Home extends React.Component {

  render() {

    const {characters, filterName, handleFilterName} = this.props;

    return(

      <div className="App">

        <Filter handleFilterName={handleFilterName}/>

        <ul className="characters__list">
          {characters
          .filter(item => item.name.includes(filterName))
          .map(item => {
            return(
              <li className="user__item" key={item.id}>
                <Link to={`/character/${item.id}`}>
                  <div className="item__card">
                    <img src={item.image} alt={`imagen de ${item.name}`} className="item__img"/>
                    <h2 className="item__name">{item.name}</h2>
                    <small className="item__house">{item.house}</small>
                  </div>
                </Link>  
              </li>
            );
          })}
        </ul>

      </div>

    );
  }
}

export default Home;