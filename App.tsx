import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{color: "#fff"}}>Open up App.tsx to start working on your app!!</Text>
      <StatusBar style="auto" />
      <Text>Test</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2F3E69',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
