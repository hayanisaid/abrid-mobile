/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Container, Header, Content, Button  ,Form, Item, Input, Label} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class Home extends Component<Props> {
  render() {
    return (
        <Container>
          <Content>
          <Row>
                <Col style={{backgroundColor:'#f4f4f4'}}>
                  <Text style={styles.title}>Welcome Home </Text>
                    
                </Col>
            </Row>
            <Row>
              <Col>
              <Text>Login</Text>
              </Col>
              <Form style={styles.foromLogin}>
                <Col>
                <Item>
                  <Label icon='add' stackedLabel>Username</Label>
                  <Input style={{backgroundColor:"red"}} placeholder='Username' style={{borderColor:'#141010'}}/>
                </Item>
                </Col>
              
              </Form>
            </Row>
          </Content>
           
        </Container>
      
    );
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
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  border:{
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  title:{
    fontSize:20,
    color:'#c00000',
    textAlign:'center'

  },
  foromLogin:{
    margin:2,
    padding:2,
    borderColor: '#d6d7da',
  },
  input:{
    width:200,
    borderColor:'black',
    fontSize:20
  }
});
