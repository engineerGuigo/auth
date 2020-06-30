import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LoadingScreen from "./screens/LoadingScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";

import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyArNGLp-Enl9RdRMkOCBqavSm5bU6Hqip0",
  authDomain: "my-market-15e06.firebaseapp.com",
  databaseURL: "https://my-market-15e06.firebaseio.com",
  projectId: "my-market-15e06",
  storageBucket: "my-market-15e06.appspot.com",
  messagingSenderId: "224291817425",
  appId: "1:224291817425:web:e9f039cfe78d09e85e02f0",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const AppStack = createStackNavigator({
  Home: HomeScreen,
});

const AuthStack = createStackNavigator({
  Register: RegisterScreen,
  Login: LoginScreen,
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: "Loading",
    }
  )
);
