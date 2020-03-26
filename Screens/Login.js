import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { getData } from '../Global.js'


const LoginScreen = ({route, navigation}) => {
  const [username, setUsername] = React.useState("")
  const [password, setPassword] = React.useState("")
  const onLoginPress = () => {
    getData('https://conta2.marte.dev/actions', { "username":username, "password": password }).then(res => {
      console.log(res)
      if (res.error == null)
       route.params.setAuth({
          username,
          password
        })
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
          onChangeText={text => setUsername(text)} />
      </View>
      <View style={styles.inputView} >
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Password..."
          placeholderTextColor="#003f5c"
          onChangeText={text => setPassword(text)} />
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
      <Text style={[styles.forgot, styles.not]}>
        *not
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
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#fb5b5a",
    marginBottom: 40
  },
  inputView: {
    width: "80%",
    backgroundColor: "#465881",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20
  },
  inputText: {
    height: 50,
    color: "white"
  },
  forgot: {
    color: "white",
    fontSize: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "70%"
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 10
  },
  loginText: {
    color: "white"
  },
  not: {
    marginTop: 200
  }
});

export default LoginScreen