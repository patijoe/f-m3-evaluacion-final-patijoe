import React from 'react';
import './Filter.scss';
import PropTypes from 'prop-types';

class Filter extends React.Component {
  render() {

    const {handleFilterName, filterName} = this.props;

    return(
      <div className="filter">
        <label htmlFor="filter_name" className="filter__label">
          <div className="filter__img" style={{backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/6/6e/Harry_Potter_wordmark.svg)`}}></div>
          <p className="filter__title">Characters</p>
        </label>
        <input id="filter_name" type="text" className="filter__name" onChange={handleFilterName} value={filterName}/>
      </div>

    );
  }
}

Filter.propTypes = {
  handleFilterName: PropTypes.func,
}
export default Filter;