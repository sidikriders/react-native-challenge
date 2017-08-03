import React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';

import Navigasinya from './config/router'


class Navigation extends React.Component {
  render() {
    return (
      <Navigasinya navigation={ addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav
      })}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    nav: state.nav
  }
}

export default connect(mapStateToProps)(Navigation)
