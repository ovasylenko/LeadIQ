import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import { Search } from 'components';
import { push } from 'react-router-redux';

const DEFULT_USER = 'ovasylenko';

@connect(() => ({}), {pushState: push})

export default class Home extends Component {
  static propTypes = {
    params: PropTypes.object.isRequired,
    pushState: PropTypes.func.isRequired
  }

  handleChange(newValue) {
    this.props.pushState(`/${newValue}`);
  }

  render() {
    const styles = require('./Home.scss');

    return (
      <div className={styles.home}>
        <Search value = { this.props.params.user || DEFULT_USER } handleChange={ this.handleChange.bind(this) } />
      </div>
    );
  }
}
