import React from 'react';
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import { Button, Icon, Card } from 'react-native-elements'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'


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
    console.log(this.props);
    return (
      <View style={
        {
          flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'center',
          backgroundColor: '#d0dbb8'
        }
      }>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', width: '90%', backgroundColor: 'white', alignItems: 'center', padding: 10, marginTop: 10}}>
          <FontAwesome name="bars"  style={{marginRight: 30, marginLeft: 10}} size={24} onPress={() => this.props.navigation.navigate('DrawerOpen')}></FontAwesome>
          <Text style={{fontSize: 20}}>HOME</Text>
        </View>
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
