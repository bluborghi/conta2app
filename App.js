import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const state = {
  email:"",
  password:""
}

export default function App() {
  const [ username, setUsername ] = React.useState("")
  const [ password, setPassword ] = React.useState("")
  const [ response, setResponse ] = React.useState("")
  const onLoginPress = () => {
    getData('https://conta2.marte.dev/actions',{"username":username, "password":password}).then(res => {
      //setResponse(res)
      console.log(res)
    })
  }
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Conta2</Text>
      <View style={styles.inputView} >
        <TextInput  
          style={styles.inputText}
          placeholder="Username..." 
          placeholderTextColor="#003f5c"
          onChangeText={text => setUsername(text)}/>
      </View>
      <View style={styles.inputView} >
        <TextInput  
          secureTextEntry
          style={styles.inputText}
          placeholder="Password..." 
          placeholderTextColor="#003f5c"
          onChangeText={text => setPassword(text)}/>
      </View>
    
      <Text style={styles.forgot}>
        Forgot Password?
      </Text>
      <Text style={styles.forgot}>
        ask @ichicoro on telegram to read the database for you (GDPR* approved)
      </Text>
      <TouchableOpacity style={styles.loginBtn}
      onPress={onLoginPress}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.loginText}>Signup</Text>
      </TouchableOpacity>
      <Text style={[ styles.forgot, styles.not]}>
        *not
      </Text>
      <Text style={styles.forgot}>
        {JSON.stringify(response)}
      </Text>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  forgot:{
    color:"white",
    fontSize:10,
    alignItems:"center",
    justifyContent:"center",
    width:"70%"
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:20,
    marginBottom:10
  },
  loginText:{
    color:"white"
  },
  not:{
    marginTop:200
  }
});


async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *client
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return await response.json(); // parses JSON response into native JavaScript objects
}

async function getData(url = '', headers = {}) {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      ...headers,
      'Content-Type': 'application/json' 
    },
  })
  return await response.json(); 
}