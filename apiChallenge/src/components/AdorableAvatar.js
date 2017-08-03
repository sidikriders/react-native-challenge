import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image
} from 'react-native';
import {
  Button,
  FormLabel,
  FormInput
} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'

class AdorableAvatar extends React.Component {
  static navigationOptions = {
    title: 'Adorable Avatar',
  };
  constructor() {
      super()
      this.state =  {
        text: "",
        imgUrl: ""
      }
    }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to The Jungle
        </Text>
        <FormLabel>
          PLEASE INPUT YOUR USERNAME TO GET YOUR AVATAR
        </FormLabel>
        <FormInput inputStyle={{width: 300}}
        onChangeText={(text) => this.setState({text: text})}
        placeholder="Username"
        containerStyle={{width: "80%", borderBottomColor: "#b2b2b2", borderBottomWidth: 1, marginBottom: 10}}
        />
        {this.state.imgUrl !== "" ?
        <View>
          <Image style={{width: 150, height: 150, marginBottom: 10}} source={{uri: this.state.imgUrl}} />
          {/* <Icon name="rocket" size={30} color="#900" /> */}
          <Button
            icon={{name: 'rocket', type: 'material-community'}}
            onPress={() => this.getImageUrl()}
            title="Generate"
            backgroundColor="#841584"
            accessibilityLabel="Learn more about this purple button"
            style={{marginBottom: 100}} />
        </View> :

        <Button
          icon={{name: 'rocket', type: 'material-community'}}
          onPress={() => this.getImageUrl()}
          title="Generate"
          backgroundColor="#841584"
          accessibilityLabel="Learn more about this purple button"
          style={{marginBottom: 100}} />}
      </View>
    );
  }

  getImageUrl() {
    this.setState({
      imgUrl: 'https://api.adorable.io/avatars/199/'+ this.state.text +'.png'
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    // textAlign: 'center',
    // color: '#333333',
    marginBottom: 5,
  },
});

export default AdorableAvatar
