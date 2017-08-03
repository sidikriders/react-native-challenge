import React from 'react';
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import { Button, Icon } from 'react-native-elements'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


class Home extends React.Component {
  static navigationOptions = {
    drawerLabel: "HOME",
    drawerIcon: ({ tintColor }) => {
      return (
        <MaterialIcons name="home" size={24} style={{color: tintColor}}></MaterialIcons>
      )
    }
  };

  constructor() {
    super()
    this.state = {
      msg: ""
    }
  }

  render() {
    return (
      <View style={
        {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }
      }>
        <Text>Home</Text>
        <MaterialIcons name="line-weight" size={24} onPress={() => this.props.navigation.navigate('DrawerOpen')}/>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    nav: state.nav
  }
}

// export default Home
export default connect(mapStateToProps)(Home)
