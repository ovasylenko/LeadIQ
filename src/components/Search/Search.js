import React, {Component, PropTypes} from 'react';

export default class Search extends Component {
    static propTypes = {
      value: PropTypes.string.isRequired,
      handleChange: PropTypes.func.isRequired
    }

    constructor(props) {
      super(props);
      this.state = {
        value: props.value
      };
    }

    componentWillReceiveProps(props, nextProps) {
      this.setState({value: nextProps.value});
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleEnter(event) {
      if (event.keyCode === 13) {  // <- Enter pressed
        this.props.handleChange(this.state.value);
      }
    }

    render() {
      const styles = require('./Search.scss');

      return (
        <div className={styles.centered}>
          <div> GitHub username: </div>
          <div>
            <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)} onKeyDown={this.handleEnter.bind(this)} />
          </div>
        </div>
      );
    }
}
