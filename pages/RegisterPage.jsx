import React from "react";
import { StyleSheet, View, KeyboardAvoidingView } from "react-native";
import { Input, Button, Text } from "react-native-elements";
import { auth } from "../firebase";

const RegisterPage = ({ navigation }) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [imageUrl, setImageUrl] = React.useState("");

  // just before screen paints stuff works (assigned navigation)
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: "Login",
    });
  }, [navigation]);

  const register = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        authUser.user.updateProfile({
          displayName: name,
          photoURL:
            imageUrl ||
            "data:image/jpeg;base64,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",
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      {/* u can pass h elements only from  native elements */}
      <Text h3 style={{ marginBottom: 50 }}>
        Create a Signal account
      </Text>

      <View style={styles.inputContainer}>
        <Input
          placeholder="Full Name"
          autoFocus
          type="text"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Input
          placeholder="Email"
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Input
          placeholder="Profile Picture (optional)"
          type="text"
          value={imageUrl}
          onChangeText={(text) => setImageUrl(text)}
          onSubmitEditing={register}
        />
      </View>

      <Button
        containerStyle={styles.button}
        raised
        title="Register"
        onPress={register}
      />
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
};

export default RegisterPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
  inputContainer: {
    width: 300,
  },
  button: {
    width: 200,
    marginTop: 10,
  },
});
