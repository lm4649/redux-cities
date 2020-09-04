import React, { Component } from 'react';
import { connect } from 'react-redux';

class ActiveCity extends Component {
  render() {
    return (
      <div className="active-city">
        <h3>{this.props.city.name}</h3>
        <p>{this.props.city.address}</p>
        <img src={`https://kitt.lewagon.com/placeholder/cities/${this.props.city.slug}`} alt="" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { city: state.activeCity };
}

export default connect(mapStateToProps)(ActiveCity);
