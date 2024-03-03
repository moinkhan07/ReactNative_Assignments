import { useState, useEffect } from "react";
import { StyleSheet, Text, TextInput, View, Pressable } from "react-native";

export default function LoginPage() {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [flag, setFlag] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

  const handleEmail = (text) => {
    setUserData({ ...userData, email: text });
  };

  const handlePassword = (text) => {
    setUserData({ ...userData, password: text });
    setPasswordTouched(true);
  };

  useEffect(() => {
    if (
      userData.email !== "" &&
      userData.password.length >= 8 &&
      /[A-Z]/.test(userData.password) &&
      /[a-z]/.test(userData.password) &&
      /\d/.test(userData.password) &&
      /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(userData.password)
    ) {
      setFlag(true);
    } else {
      setFlag(false);
    }
  }, [userData.email, userData.password]);

  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput
          style={[styles.input, { marginBottom: 30 }]}
          value={userData.email}
          onChangeText={handleEmail}
          placeholder={"Enter Email"}
        />
        <TextInput
          value={userData.password}
          onChangeText={handlePassword}
          style={styles.input}
          placeholder={"Enter Password"}
        />
        {!flag && passwordTouched && (
          <Text
            style={[
              {
                marginBottom: 30,
                color: "red",
                paddingTop: 3,
                textAlign: "center",
              },
            ]}
          >
            Password should be atleast 8 characters and must contain at least
            one uppercase letter, one lowercase letter, one number, and one
            special character.
          </Text>
        )}
      </View>

      <View style={styles.btnView}>
        <Pressable
          disabled={!flag}
          style={({ pressed }) => [
            styles.btnPress,
            { backgroundColor: flag ? "#FF435B" : "#D4D8DE" },
            { opacity: pressed ? 0.8 : 1, marginTop: 20 },
          ]}
        >
          <Text style={styles.btnText}>Login</Text>
        </Pressable>
        {flag && (
          <Pressable
            style={({ pressed }) => [
              styles.btnPress,
              { backgroundColor: flag ? "#FF435B" : "#D4D8DE" },
              { opacity: pressed ? 0.8 : 1 },
            ]}
          >
            <Text style={styles.btnText}>Login With Google</Text>
          </Pressable>
        )}

        {flag && (
          <Pressable
            style={({ pressed }) => [
              styles.btnPress,
              { backgroundColor: "#3C5B98", opacity: pressed ? 0.8 : 1 },
            ]}
          >
            <Text style={styles.btnText}>Log in With Facebook</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 100,
  },
  inputView: {
    paddingHorizontal: 20,
  },
  input: {
    height: 50,
    borderRadius: 20,
    borderColor: "black",
    borderWidth: 1,
    paddingLeft: 15,
  },
  btnView: {
    paddingHorizontal: 20,
  },
  btnPress: {
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginBottom: 20,
  },
  btnText: {
    fontSize: 18,
    color: "white",
  },
});
