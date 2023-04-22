//Nason PR Test 4/22/2023
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Button, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


// Welcome Screen
function Welcome({navigation}: {navigation: any}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header_text}>Welcome to Prayer Circle</Text>
      </View>
      <Image style={styles.logo} source={require('./assets/logo/Dark_Logo.png')} />
      <View style={styles.footer}>
        <Pressable style={styles.footer_pressable} onPress={() => navigation.navigate('Content')}>
          <Text style={styles.footer_text}>Continue</Text>
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

// Main Content Screen
function Content({navigation}: {navigation: any}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header_text}>Content</Text>
      </View>
      <View style={styles.footer}>
        <Pressable style={styles.footer_pressable} onPress={() => navigation.goBack()}>
          <Text style={styles.footer_text}>Back</Text>
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}


// Navigation Stack 
const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false}}/>
      <Stack.Screen name="Content" component={Content} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}

// App Call
export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2F3E69',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header: {
    paddingTop: 60,
  },
  header_text: {
    color: '#F7F1E3',
    textAlign: 'center',
    fontSize: 50, 
    fontWeight: 'bold',
    padding: 10
  },
  logo: {
    bottom: 80,
    height: 275,
    width: 263
  },
  footer: {
    backgroundColor: "#2B2B2B",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 13,
    width: 415,
    alignItems: 'center'
  },
  footer_pressable: {
    backgroundColor: "#006E5B",
    borderRadius: 30,
    width: 390,
    alignItems: 'center'
  },
  footer_text: {
    color: "#F7F1E3", 
    fontSize: 50, 
    fontWeight: 'bold',
    padding: 10
  }
});
