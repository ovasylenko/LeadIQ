import React, { Component, PropTypes } from 'react';
import { asyncConnect } from 'redux-async-connect';
import {connect} from 'react-redux';
import { isLoaded as isReadmeLoaded, load as loadReadme } from 'redux/modules/readme';
import { push } from 'react-router-redux';
import marked from 'marked';
@asyncConnect([{
  promise: ({store: {dispatch, getState}, params}) => {
    const promises = [];
    if (!isReadmeLoaded(getState(), params.user, params.project)) {
      promises.push(dispatch(loadReadme(params.user, params.project)));
    }

    return Promise.all(promises);
  }
}])

@connect(state => ({
  readme: state.readme.data,
  error: state.readme.error

}), {pushState: push})

export default class Readme extends Component {
  static propTypes = {
    error: PropTypes.object,
    params: PropTypes.object.isRequired,
    readme: PropTypes.string,
    pushState: PropTypes.func.isRequired
  }

  goBack() {
    this.props.pushState(`/${this.props.params.user}`);
  }

  render() {
    const styles = require('./Repositories.scss');
    const trnformedHtml = { __html: marked(this.props.readme)};
    return (
      <div className={styles.home}>
        <div className={styles.fixedHeader}>
          <div className={styles.right}>
            <div className={styles.center}>{this.props.params.project} {this.props.params.user} Project</div>
          </div>
          <div className={styles.left} onClick={ this.goBack.bind(this) }>Back</div>

        </div>
          {
            (!!this.props.error) ?
            this.props.error.message :
            (<div className={[styles.main, styles.readme].join(' ')} dangerouslySetInnerHTML={ trnformedHtml }></div>)
          }

      </div>
    );
  }
}
