import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions
} from 'react-native';
import {
  Button,
  FormLabel,
  FormInput
} from 'react-native-elements'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

class ChatWithSidik extends React.Component {
  static navigationOptions = {
    drawerLabel: "CHAT WITH SIDIK",
    drawerIcon: ({ tintColor }) => {
      return (
        <MaterialIcons name="question-answer" size={24} style={{color: tintColor}}></MaterialIcons>
      )
    }
  }
  constructor() {
    super()
    this.state = {
      chatLog: [],
      boksKata: "",
      isLoading: false,
      dimensions: Dimensions.get('window')
    }
  }
  render() {
    console.log('this.state.dimensions',this.state.dimensions);
    return (
      <View style={styles.containerSatu}>
        <View style={styles.container}>
          <ScrollView contentContainerStyle={styles.scrollViewStyle}>
            {this.state.chatLog.map( (x, idx) => {
              return (
                <Text key={idx}>{x}</Text>
              )
            })}
          </ScrollView>
          { this.state.isLoading ? <Text style={{fontSize: 20, fontWeight: 'bold', fontStyle: 'italic'}}>Sidik is typing</Text> : <Text></Text>}
        </View>
        <View style={styles.containerDua} >
          <FormInput
            containerStyle={{flex: 1, width: this.state.dimensions.width*2}}
            onChangeText={(e) => {this.textBox(e)}} defaultValue={this.state.boksKata} placeholder="Type your chat here.."/>
          <Button
            onPress={() => this.sendChat()}
            title="Send"
            icon={{name: "send"}}
            iconRight
            backgroundColor="#841584"
            accessibilityLabel="Learn more about this purple button"
            style={{flex: 1}}
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
      chatLog: [...this.state.chatLog, 'You: ' + this.state.boksKata],
      isLoading: true
    })
    this.getRespone()
  }

  getRespone() {
    let self = this
    return fetch('http://sandbox.api.simsimi.com/request.p?key=65a8d0ee-c166-4c8d-bdd0-f9dc14d9a9c8&lc=en&ft=1.0&text='+this.state.boksKata)
    .then((response) => response.json())
      .then((responseJson) => {
        self.setState({
          chatLog: [...self.state.chatLog, 'Sidik: ' + responseJson.response]
        })
        self.setState({
          boksKata: "",
          isLoading: false
        })
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

const styles = StyleSheet.create({
  containerSatu: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#afffbb'
  },
  container: {
    flex: 1,
    // justifyContent: 'flex-start',
    // alignItems: 'flex-start',
    backgroundColor: '#fff',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 10,
    width: '90%',
    marginTop: 20,
    overflow: 'scroll'
  },
  containerDua: {
    justifyContent: 'center',
    alignItems: 'center',
    // alignContent: 'center',
    flexDirection: 'row'
  },
  scrollViewStyle: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingVertical: 20,
    flexDirection: "column"
  }
})

export default ChatWithSidik
