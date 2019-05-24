import React from 'react';
import './Filter.scss';

class Filter extends React.Component {
  render() {

    const {handleFilterName} = this.props;

    return(
      <div className="filter">
        <label htmlFor="filter_name" className="filter__label">Harry Potter characters</label>
        <input id="filter_name" type="text" className="filter__name" onChange={handleFilterName} />
      </div>

    );
  }
}
export default Filter;