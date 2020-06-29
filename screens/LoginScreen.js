import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.greeting}>{`Hello again.\nWelcome back.`}</Text>

        <View style={styles.errorMessage}>
          <Text>Error</Text>
        </View>

        <View style={styles.form}>
          <View>
            <Text style={styles.inputTitle}>Email Adress</Text>
            <TextInput style={styles.input} autoCapitalize="none"></TextInput>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  greeting: {
    marginTop: 32,
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
  },
  errorMessage: {
    height: 72,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30,
  },
});
