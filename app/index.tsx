import { StyleSheet, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { TextInput } from "react-native-gesture-handler";

const Home = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Input Name"
        value={name}
        onChangeText={(name) => {
          setName(name);
          console.log(name);
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Input Age"
        value={age}
        onChangeText={(age) => {
          setAge(age);
          console.log(age);
        }}
      />
      <Link href="/modal" asChild>
        <Pressable
          style={{
            paddingHorizontal: 25,
            paddingVertical: 10,
            backgroundColor: "red",
            borderRadius: 5,
          }}
        >
          <Text>Submit</Text>
        </Pressable>
      </Link>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
  },
  input: {
    backgroundColor: "#eeeeee",
    // paddingHorizontal: 20,
    width: "50%",
    textAlign: "center",
    paddingVertical: 10,
    marginBottom: 5,
  },
});
