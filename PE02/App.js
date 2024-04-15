import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  StyleSheet,
} from "react-native";

const App = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{ uri: "https://via.placeholder.com/150" }}
        style={styles.image}
      />
      <View style={styles.header}>
        <Text style={styles.title}>What Course did you like?</Text>
        <TextInput placeholder="ex 624" style={styles.input} />
      </View>
      <View style={styles.mainBackground}>
        <Text style={styles.mainHeader}>Core Requirements</Text>
        <Text style={styles.mainHeader}>24 credits</Text>
      </View>
      <Text style={styles.title}>CS 504 Software Engineering</Text>
      <Text style={styles.title}>CS 506 Programming for computing</Text>
      <Text style={styles.title}>CS 519 Cloud computing overview</Text>
      <Text style={styles.title}>CS 533 Computer Architecture</Text>
      <Text style={styles.title}>CS 547 Secure Systems and Programs</Text>
      <Text style={styles.title}>
        CS 622 Discrete Math and Algorithm for computin
      </Text>
      <Text style={styles.title}>CS 510 AI</Text>
      <Text style={styles.title}>
        CS 620 Machine learning and deep learning
      </Text>
      <View style={styles.mainBackground}>
        <Text style={styles.mainHeader}>Depth of Study</Text>
        <Text style={styles.mainHeader}>6 credits</Text>
      </View>
      <Text style={styles.title}>CS 624 Full stack - Mobile App</Text>
      <Text style={styles.title}>CS 628 Full stack - Web App</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  mainBackground: {
    backgroundColor: "yellow",
  },
  image: {
    width: 150,
    height: 150,
  },
  content: {
    marginBottom: 20,
  },
  mainHeader: {
    fontSize: 40,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    width: "100%",
    fontSize: 16,
  },
});

export default App;
