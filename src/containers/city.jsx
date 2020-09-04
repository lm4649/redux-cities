import React, { Component } from 'react';

export default class City extends Component {
  render() {
    return <div className="city">{this.props.city.name}</div>;
  }
}
