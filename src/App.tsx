import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import CharacterBuilderScreen from './screens/CharacterBuilderScreen';
import SavedBuildsScreen from './screens/SavedBuildsScreen';
import SettingsScreen from './screens/SettingsScreen';
// import { CharacterProvider } from './contexts/CharacterContext';
import * as Font from 'expo-font';
import { Cinzel_400Regular,Cinzel_700Bold } from '@expo-google-fonts/cinzel';
import { View,Text } from 'react-native';
const Stack = createStackNavigator();

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        Cinzel: Cinzel_400Regular,
        Cinzel_Bold: Cinzel_700Bold
      });
      setFontsLoaded(true);
      console.log("Fuentes cargadas"); // Agrega este log para confirmar la carga
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Cargando fuentes...</Text>
      </View>
    );
  }
  return (
    // <CharacterProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Principal" component={HomeScreen} />
          <Stack.Screen name="CharacterBuilder" component={CharacterBuilderScreen} />
          <Stack.Screen name="SavedBuilds" component={SavedBuildsScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    // </CharacterProvider>
  );
};

export default App;