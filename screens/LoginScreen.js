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

          <View style={{ marginTop: 32 }}>
            <Text style={styles.inputTitle}>Password</Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              autoCapitalize="none"
            ></TextInput>
          </View>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={{ color: "#fff", fontWeight: "500" }}>Sign in</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ alignSelf: "center", marginTop: 32 }}>
          <Text style={{ color: "#414959", fontSize: 13 }}>
            New to My-Market? <Text>Sign Up</Text>
          </Text>
        </TouchableOpacity>
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
  form: {
    marginBottom: 48,
    marginHorizontal: 30,
  },
  inputTitle: {
    color: "#f646d3",
    fontSize: 10,
    textTransform: "uppercase",
  },
  input: {
    borderBottomColor: "#f646d3",
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: "#3F5",
  },
  button: {
    marginHorizontal: 30,
    backgroundColor: "#1a2343",
    borderRadius: 4,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
  },
});
