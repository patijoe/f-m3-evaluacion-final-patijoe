import React from 'react';

class Filter extends React.Component {
  render() {

    const {handleFilterName} = this.props;

    return(
      <div>
        <label htmlFor="filter_name">Busca tu personaje preferido por nombre</label>
        <input id="filter_name" type="text" className="filter__name" onChange={handleFilterName} />
      </div>

    );
  }
}
export default Filter;