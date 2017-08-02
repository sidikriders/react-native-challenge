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
      currUser: "You",
      chatLog: [],
      boksKata: ""
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container} >
          {this.state.chatLog.map( (x, idx) => {
            if (idx % 2 === 0) {
              return (
                <Text key={idx}>You : {x}</Text>
              )
            } else {
              return (
                <Text key={idx}>Sidik : {x}</Text>
              )
            }
          })}
        </View>
        <View style={styles.containerDua} >
        <TextInput style={{width: "80%"}} onChangeText={(e) => {this.textBox(e)}} defaultValue={this.state.boksKata}/>
        <Button
          onPress={() => this.sendChat()}
          title="Send"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
          style={{width: "20%"}}
        />
        </View>
      </View>
    )
  }

  textBox(str) {
    this.setState({
      boksKata: str
    })
  }

  sendChat() {
    this.setState({
      chatLog: [...this.state.chatLog, this.state.boksKata]
    })
    // this.setState({
    //   boksKata: ""
    // })
    this.getRespone()
  }

  getRespone() {
    let self = this
    return fetch('http://sandbox.api.simsimi.com/request.p?key=65a8d0ee-c166-4c8d-bdd0-f9dc14d9a9c8&lc=en&ft=1.0&text='+this.state.boksKata)
    .then((response) => response.json())
      .then((responseJson) => {
        self.setState({
          chatLog: [...self.state.chatLog, responseJson.response]
        })
        self.setState({
          boksKata: ""
        })
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#afffbb'
  },
  containerDua: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#afffbb',
    flexDirection: 'row',
    width: '80%'
  }
})

export default chatWithSidik
