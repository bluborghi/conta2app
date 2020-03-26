import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Screens/Login.js';
import HomeScreen from './Screens/Home.js';

const Stack = createStackNavigator();

const App = () => {
  const [ auth, setAuth ] = React.useState({
    username: "",
    password: ""
  })

  return (
    <NavigationContainer>
      <Stack.Navigator >
        { auth.username && auth.username.trim().length>0 && auth.password && auth.password.trim().length>0 ? 
        ( <Stack.Screen initialParams={ {auth} }  name="Home" component={HomeScreen} /> ) :
        ( <Stack.Screen initialParams={ {setAuth} } name="Login" component={LoginScreen} />) }
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App

//{ username && password && logged == true ? "Home" : "Login"}