import React, { useState } from "react";
import { Text, View, TextInput, Button } from "react-native";
import { styles } from "./styles";

function Login(props) {
  const { onLogin } = props;
  const [loginCode, setLoginCode] = useState("");

  const onChangeHandler = (text) => {
    setLoginCode(text);
  };

  const onLoginBtn = () => {
    onLogin(loginCode);
  };

  return (
    <View>
      <Text style={styles.header}>Login</Text>
      <TextInput
        style={styles.input}
        value={loginCode}
        onChangeText={onChangeHandler}
      />
      <Button onPress={onLoginBtn} title="Login" />
    </View>
  );
}

export default Login;
