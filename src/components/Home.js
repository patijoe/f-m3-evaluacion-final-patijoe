import React from 'react';
import Filter from './Filter';
import {Link} from 'react-router-dom';
import './Home.scss';
import PropTypes from 'prop-types';

class Home extends React.Component {

  render() {

    const {characters, filterName, handleFilterName, handleSelectFav, favorites} = this.props;

    return(

      <div className="home">
        <Filter 
          className="filter" 
          handleFilterName={handleFilterName}
          filterName={filterName}  
        />

        <ul className="characters__list">
          {characters
          .filter(item => item.name.toUpperCase().includes(filterName.toUpperCase()))
          .map(item => {

            if (favorites.includes(item.id)===true) {
              console.log(item.id, item.name);
            }

            return(
              <li 
                className="user__item" 
                key={item.id}
                onClick={handleSelectFav}
                id={item.id}>
                  
                <Link className="home__link" to={`/character/${item.id}`}>
                    <div className="img__container" style={{backgroundImage: `url(${item.image})`}}></div>
                    
                    <div className="info__container">
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

Home.propTypes = {
  characters: PropTypes.array,
  filterName: PropTypes.string, 
  handleFilterName: PropTypes.func,
}
export default Home;