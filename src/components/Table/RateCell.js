import React, {Component, PropTypes} from 'react';
import { get } from 'lodash'; // <- we need lodash to access complex dynamic json fields like a.b.c

export default function(baseField, topField) {
  return class RateCell extends Component {
    static propTypes = {
      row: PropTypes.object.isRequired
    }

    render() {
      return (
        <div title="{ this.props.row[baseField] } / { this.props.row[topField] }">{ get(this.props.row, baseField) } / { get(this.props.row, topField) }</div>
      );
    }
  };
}
