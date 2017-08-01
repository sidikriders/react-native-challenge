import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  View
} from 'react-native';

class chatWithSidik extends React.Component {
  static navigationOptions = {
    title: 'Chat with Sidik'
  }
  constructor() {
    super()
    this.state = {
      currUser: "",
      chatLog: []
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View>
          {this.state.chatLog.map( (x, idx) => {
            if (idx % 2 === 0) {
              return (
                <Text>{this.currUser}: {x}</Text>
              )
            } else {
              return (
                <Text>Sidik: {x}</Text>
              )
            }
          })}
        </View>
        <TextInput style={{width: "80%"}} onChange={(e) => console.log(e.target.value())}/>
        <Button
          onPress={() => alert("Go!")}
          title="Send"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
          style={{width: "20%"}}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#afffbb',
    flexDirection: 'row'
  }
})

export default chatWithSidik
