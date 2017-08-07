import React, { Component, PropTypes } from 'react';
// import config from '../../config';
import sematable, { Table } from 'sematable';
import statusCell from './StatusCell';
import rateCell from './RateCell';

const columns = [
  { key: 'isValid', header: 'Pass', sortable: true, Component: statusCell({direct: true}), filterable: true },
  { key: 'scenarioId', header: 'Scenario Id', sortable: true, searchable: true, primaryKey: true },
  { key: 'carBuild', header: 'Car Build', sortable: true, searchable: true, primaryKey: false, filterable: true },
  { key: 'startTime', header: 'Start Time', sortable: true, searchable: true, primaryKey: false},
  { key: 'runningTime', header: 'RunningTime Time', Component: rateCell('runningTime', 'scenario.maxRunningTime'), sortable: true },
  { key: 'result.numberOfStops', header: 'Number Of Stops', Component: rateCell('result.numberOfStops', 'scenario.maxNumberOfStops'), sortable: true },
  { key: 'result.hasCollision', header: 'Has Collision', Component: statusCell({direct: false}), sortable: true, searchable: true, primaryKey: false, filterable: true }
];

const configs = {
  defaultPageSize: 50,
  showFilter: true
};
// | scenarioId+ | carBuild | startTime | runningTime / maxRunningTime | numberOfStops / maxNumberOfStops | hasCollision | doesScenarioPass |
class SimulationLogsTable extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired
  };
  render() {
    return (
        <Table
         {...this.props}
          columns={columns}
          data={this.props.data}
        />
    );
  }
}


export default sematable('SimulationLogsTable', SimulationLogsTable, columns, configs);
