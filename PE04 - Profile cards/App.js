import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import ProfileCard from './ProfileCard'; // Assuming your component file is in the same directory

// const cardData = [
//   { id: 1, name: 'John Doe', occupation: 'React Native Developer', description: 'John is a really great Javascript developer. He loves using JS to build React Native applications for iOS and Android' },
//   { id: 2, name: 'John Doe', occupation: 'React Native Developer', description: 'John is a really great Javascript developer. He loves using JS to build React Native applications for iOS and Android' },
//   { id: 3, name: 'John Doe', occupation: 'React Native Developer', description: 'John is a really great Javascript developer. He loves using JS to build React Native applications for iOS and Android' },
//   { id: 4, name: 'John Doe', occupation: 'React Native Developer', description: 'John is a really great Javascript developer. He loves using JS to build React Native applications for iOS and Android' },
//   { id: 5, name: 'John Doe', occupation: 'React Native Developer', description: 'John is a really great Javascript developer. He loves using JS to build React Native applications for iOS and Android' },
//   { id: 6, name: 'John Doe', occupation: 'React Native Developer', description: 'John is a really great Javascript developer. He loves using JS to build React Native applications for iOS and Android' },
//   { id: 7, name: 'John Doe', occupation: 'React Native Developer', description: 'John is a really great Javascript developer. He loves using JS to build React Native applications for iOS and Android' },
//   { id: 8, name: 'John Doe', occupation: 'React Native Developer', description: 'John is a really great Javascript developer. He loves using JS to build React Native applications for iOS and Android' },
//   // Add more card data as needed
// ];

const card = { id: 1, name: 'John Doe', occupation: 'React Native Developer', description: 'John is a really great Javascript developer. He loves using JS to build React Native applications for iOS and Android' }
class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cardRow}>
          <ProfileCard
            key={card.id}
            name={card.name}
            occupation={card.occupation}
            description={card.description}
            onPress={() => console.log('Card clicked')} // Add your onPress logic
            style={[styles.cardContainer]} // Apply margin to every other card to create 2 columns
          />
          <ProfileCard
            key={card.id}
            name={card.name}
            occupation={card.occupation}
            description={card.description}
            onPress={() => console.log('Card clicked')} // Add your onPress logic
            style={[styles.cardContainer]} // Apply margin to every other card to create 2 columns
          />
        </View>
        <View style={[styles.cardRow, styles.random]}>
          <ProfileCard
            key={card.id}
            name={card.name}
            occupation={card.occupation}
            description={card.description}
            onPress={() => console.log('Card clicked')} // Add your onPress logic
            style={[styles.cardContainer]} // Apply margin to every other card to create 2 columns
          />
          <ProfileCard
            key={card.id}
            name={card.name}
            occupation={card.occupation}
            description={card.description}
            onPress={() => console.log('Card clicked')} // Add your onPress logic
            style={[styles.cardContainer]} // Apply margin to every other card to create 2 columns
          />
        </View>
        <View style={styles.cardRow}>
          <ProfileCard
            key={card.id}
            name={card.name}
            occupation={card.occupation}
            description={card.description}
            onPress={() => console.log('Card clicked')} // Add your onPress logic
            style={[styles.cardContainer]} // Apply margin to every other card to create 2 columns
          />
          <ProfileCard
            key={card.id}
            name={card.name}
            occupation={card.occupation}
            description={card.description}
            onPress={() => console.log('Card clicked')} // Add your onPress logic
            style={[styles.cardContainer]} // Apply margin to every other card to create 2 columns
          />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    marginTop: 130

  },
  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  random: {
  },

});

export default App;
