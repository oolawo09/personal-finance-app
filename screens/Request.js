import React from 'react';
import { ActivityIndicator, Keyboard, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { Button, Block, Text, Input } from '../components';
import { theme } from '../constants'


export default class Request extends React.Component {

  static navigationOptions = {

  }

  handleRequest(){ 
    const { navigation } = this.props;
    Keyboard.dismiss(); 
    navigation.navigate("Home");
  }

  render() {
    const { navigation } = this.props;

    return (
      <KeyboardAvoidingView style={styles.request} behavior="padding">
        <Block padding={[0, theme.sizes.base * 2]}>
          <Text h1 bold>Request</Text>
          <Block middle>
            <Input
              label="Phone Number"
              style={styles.input}
            />
            <Input
              label="Amount"
              style={styles.input}
            />
            <Button gradient onPress={() => this.handleRequest()}>
                <Text bold white center>Request</Text>
            </Button>            
          </Block>
        </Block>
      </KeyboardAvoidingView>
    );;
  }
}

const styles = StyleSheet.create({
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  request: {
    flex: 1,
    justifyContent: 'center',
  },
});