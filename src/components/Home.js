import React from 'react';

class Home extends React.Component {

  render() {

    const {characters, filterName, handleFilterName} = this.props;

    return(

      <div className="App">

        <label htmlFor="filter_name">Busca tu personaje preferido por nombre</label>
        <input id="filter_name" type="text" className="filter__name" onChange={handleFilterName} />

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

export default Home;