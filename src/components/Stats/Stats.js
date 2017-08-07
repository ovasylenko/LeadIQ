import React, {Component, PropTypes} from 'react';
import * as d3 from 'd3';

export default class Stats extends Component {
  static propTypes = {
    rows: PropTypes.array.isRequired,
    total: PropTypes.number
  }

  render() {
    const format = d3.format('.2%');
    const { rows, total } = this.props;
    const failedRows = rows.filter((it) => !it.isValid);
    const failedRowsWithMaxNumberOfStops = failedRows.filter((it) => it.fail.reason === 'exceededNumberOfStops').length;
    const failedRowsWithCollision = failedRows.filter((it) => it.fail.reason === 'collision').length;
    const failedRowsWithExceededTimeToGo = failedRows.filter((it) => it.fail.reason === 'exceededRunningTime').length;

    if (total === 0) {
      return (<div>No Data</div>);
    }

    if (failedRows.length === 0) {
      return (<div>All runs from <span className="current">{rows.length}</span> passed from <span className="total">{total}</span>! </div>);
    }

    return (<div>
      <div>Total: <span className="total">{total}</span></div>
      <div>Current Selection: <span className="current">{rows.length}</span></div>
      <div>Percentage of runs that exceed the maximum number of stops : <span className="failedRowsWithMaxNumberOfStopsRate">{format(failedRowsWithMaxNumberOfStops / rows.length)}</span> </div>
      <div>Percentage of runs that exceed running time : {format(failedRowsWithExceededTimeToGo / rows.length)} </div>
      <div>Percentage of runs with collision : {format(failedRowsWithCollision / rows.length)} </div>
      <div>Total fails : {format(failedRows.length / rows.length)} </div>
    </div>);
  }
}

// percentage of runs that exceed the maximum number of stops
// percentage of runs that exceed the maximum running time
// percentage of runs that have a collision
// percentage of runs that do not pass
