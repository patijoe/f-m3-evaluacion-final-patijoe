import React from 'react';
import {Link} from 'react-router-dom';
import './Details.scss';
import PropTypes from 'prop-types';

class Details extends React.Component {

  componentWillUnmount () {
    this.props.handleResetFilter();
  }

  render() {

    const {characters} = this.props;
    const id = this.props.match.params.id;

    const newChar = characters.find(item => parseInt(id)===item.id);
    console.log('***', newChar);

    return(
      <div className= "card__container">
        {newChar !== undefined 
          ? <div className="newChar__card">
              <div className="newChar__img" style={{backgroundImage: `url(${newChar.image})`}}></div>
              <div className="newChar__info">
                <h2 className="newChar__name">{newChar.name}</h2>
                <h3 className="info newChar__house">{`Casa: ${newChar.house}`}</h3>
                <h3 className="info newChar__yerOfBirth">{`Nacimiento: ${newChar.yearOfBirth}`}</h3>
                <h3 className="info newChar__patronus">{`Patronus: ${newChar.patronus}`}</h3>
                <h3 className="info newChar__alive">{newChar.alive===true ? 'Estado: VIVO' : 'Estado: CAPUT'}</h3>
                <h3 className="info newChar__varita">{`Material de la varita: ${newChar.wand.core}`}</h3>
              </div>
            </div>
          : <p className="advise">'No tengo la info selecionada'</p>
        }
          <Link to="/" className="link__back">VOLVER</Link>
     </div>
    );
  }
}

Details.propTypes = {
  handleResetFilter: PropTypes.func,
}
export default Details;