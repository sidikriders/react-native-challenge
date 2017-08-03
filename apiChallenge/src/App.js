import React from 'react';
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'

import store from './store'
import AdorableAvatar from './components/AdorableAvatar'
import chatWithSidik from './components/chatWithSidik'
import Navigation from './Navigation'

class apiChallenge extends React.Component {
  render() {
    return (
      <Provider store={store}>
          <Navigation />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('apiChallenge', () => apiChallenge);
