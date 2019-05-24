import React from 'react';
import {Link} from 'react-router-dom';

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
      <div>
        {newChar !== undefined 
          ? <div className="newChar__card">
          <img src={newChar.image} alt={`imagen de ${newChar.name}`} className="newChar__img"/>
          <h2 className="newChar__name">{newChar.name}</h2>
          <h3 className="newChar__house">{`Casa: ${newChar.house}`}</h3>
          <h3 className="newChar__yerOfBirth">{`Nacimiento: ${newChar.yearOfBirth}`}</h3>
          <h3 className="newChar__patronus">{`Patronus: ${newChar.patronus}`}</h3>
          <h3 className="newChar__alive">{newChar.alive===true ? 'Estado: VIVO' : 'CAPUT'}</h3>
          <h3 className="newChar__varita">{`Material de la varita: ${newChar.wand.core}`}</h3>
          </div>
          : <p className="advise">'No tengo la info selecionada'</p>
        }
          <Link to="/">VOLVER</Link>
     </div>
    );
  }
}

export default Details;