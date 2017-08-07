import React, {Component, PropTypes} from 'react';

export default class RepositoriesList extends Component {
    static propTypes = {
      list: PropTypes.array.isRequired,
      pushState: PropTypes.func,
      user: PropTypes.string
    }

    redirect(project) {
      return () =>{
        this.props.pushState(`/${this.props.user}/${project}`);
      };
    }

    render() {
      const styles = require('./RepositoriesList.scss');

      return (
        <div className={styles.center}>
            {
              this.props.list.map((it) => {
                return (<div className={styles.item} key={it.name} onClick={this.redirect.bind(this)(it.name)}>{it.name}</div>);
              })
            }
        </div>
      );
    }
}
