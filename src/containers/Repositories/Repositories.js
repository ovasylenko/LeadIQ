import React, { Component, PropTypes } from 'react';
import { asyncConnect } from 'redux-async-connect';
import {connect} from 'react-redux';
import { isLoaded as isReposLoaded, load as loadRepos } from 'redux/modules/repositories';
import { RepositoriesList } from 'components';
import { push } from 'react-router-redux';

@asyncConnect([{
  promise: ({store: {dispatch, getState}, params}) => {
    const promises = [];
    if (!isReposLoaded(getState(), params.user)) {
      promises.push(dispatch(loadRepos(params.user)));
    }

    return Promise.all(promises);
  }
}])

@connect(state => ({
  repositories: state.repositories.data,
  error: state.repositories.error
}), {pushState: push})

export default class Repositories extends Component {
  static propTypes = {
    error: PropTypes.object,
    params: PropTypes.object.isRequired,
    pushState: PropTypes.func.isRequired,
    repositories: PropTypes.array.isRequired

  }

  goBack() {
    this.props.pushState(`/`);
  }

  render() {
    const styles = require('./Repositories.scss');

    return (
      <div className={styles.home}>
        <div className={styles.fixedHeader}>
          <div className={styles.right}>
            <div className={styles.center}>{this.props.params.user}'s Projects</div>
          </div>
          <div className={styles.left} onClick={ this.goBack.bind(this) }>Back</div>

        </div>
        <div className={styles.main}>
          {
            (!!this.props.error) ?
            this.props.error.message :
            (<RepositoriesList user={this.props.params.user} list={this.props.repositories} pushState={ this.props.pushState.bind(this) } />)
          }
        </div>

      </div>
    );
  }
}
