import React from 'react';
import { StyleSheet, 
  Text, 
  View, 
  TextInput, 
  Button,
  Image,
  } from 'react-native';
  
  



export default class Home extends React.Component{
    render() {
      return (
        <View style={{flex : 1,justifyContent: 'center',alignItems: 'center',}}>
          <Text>
            this is Home!
          </Text>
          <Button onPress={()=> this.props.navigation.navigate("search")} title="Go to Search"/>
        </View>
        
      )
    }
}



  //  <switch value={} onValueChange={}
  //  slider 
  //  instead of using view use <keybordavoidingView
  //  codesandbox
  //  scrollView, flatlist, sectionlist
  //  activityindicator, picker ,dimension "react-native"
  //  webview
  //  modal
  // platform
  // twilio
  //  academind
  
