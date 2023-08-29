import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { TextInput } from "react-native-gesture-handler";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TextInput style={styles.input} placeholder="Input Name" />
      <TextInput style={styles.input} placeholder="Input Age" />
      <Link href="/modal" asChild>
        <View
          style={{
            paddingHorizontal: 25,
            paddingVertical: 10,
            backgroundColor: "red",
            borderRadius: 5,
          }}
        >
          <Text>Submit</Text>
        </View>
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
