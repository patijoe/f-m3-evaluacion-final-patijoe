import React from 'react';
import Filter from './Filter';
import {Link} from 'react-router-dom';
import './Home.scss';
import PropTypes from 'prop-types';

class Home extends React.Component {

  render() {

    const {characters, filterName, handleFilterName, handleFilterHair} = this.props;
    const house = {
      Gryffindor: 'https://vignette.wikia.nocookie.net/es.harrypotter/images/a/a3/Gryffindor_Pottermore.png/revision/latest?cb=20140922195249',
      Slytherin: 'https://vignette.wikia.nocookie.net/es.harrypotter/images/6/69/Slytherin_Pottermore.png/revision/latest?cb=20141001130915',
      Hufflepuff: 'https://vignette.wikia.nocookie.net/es.harrypotter/images/4/42/Hufflepuff_Pottermore.png/revision/latest?cb=20141001131135',
      Ravenclaw: 'https://vignette.wikia.nocookie.net/es.harrypotter/images/7/76/Ravenclaw_Pottermore.png/revision/latest?cb=20141001130914', 
      '': ''
    }

    return(

      <div className="home">
        <Filter 
          className="filter" 
          handleFilterName={handleFilterName}
          filterName={filterName}  
        />

        <label htmlFor="hair">Filtra por color de pelo</label>
        <input 
          type="text" 
          id="hair"
          onChange={handleFilterHair}
        />

        <ul className="characters__list">
          {characters
          .filter(item => item.name.toUpperCase().includes(filterName.toUpperCase()))
          .map(item => {
            return(
              <li 
                className="user__item" 
                key={item.id}
              >
                <Link className="home__link" to={`/character/${item.id}`}>
                    <div className="img__container" style={{backgroundImage: `url(${item.image})`}}></div>
                    
                    <div className="info__container">
                      <h2 className="item__name">{item.name}</h2>
                      <img className="item__house" alt="" src={house[item.house]}></img>
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