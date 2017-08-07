import React, {Component, PropTypes} from 'react';

// config.direct When it is
// true - renders true as green
// false - renders false as green
export default function(config) {
  return class StatusCell extends Component {
    static propTypes = {
      row: PropTypes.object.isRequired,
      children: PropTypes.bool.isRequired
    }

    render() {
      if (this.props.children && config.direct || !this.props.children && !config.direct ) {
        return (<div className="status green"></div>);
      }
      return (
        <div className="status red" title={ !!this.props.row.fail ? this.props.row.fail.reason : '' }></div>
      );
    }
  };
}
