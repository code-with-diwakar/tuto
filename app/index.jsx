import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const App = () => {
  const [name, setName] = useState("");
  const [usn, setUsn] = useState("");
  const [college, setCollege] = useState("");
  
  return (
    <View>
      <Text>Welcome To Form Validation</Text>
      <Text>Your Name is: {name}</Text>
      <Text>Your USN is: {usn}</Text>
      <Text>Your College is: {college}</Text>
      
      <TextInput
        style={style.input}
        placeholder="Name"
        onChangeText={(text) => setName(text)}
        value={name}
      />
      
      <TextInput
        style={style.input}
        placeholder="USN"
        onChangeText={(text) => setUsn(text)}
        value={usn}
      />
      
      <TextInput
        style={style.input}
        placeholder="College Name"
        onChangeText={(text) => setCollege(text)}
        value={college}
      />
      
      <Button title="Clear Name" onPress={() => [setName(""),setCollege(" "),setUsn("")]} />
    </View>
  );
};

const style = StyleSheet.create({
  input: {
    borderWidth: 3,
    borderColor: "red",
    padding: 10, 
    marginVertical: 5,  // Adds some spacing between input fields
  },
});

export default App;
