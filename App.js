
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/SplashScreen';
import TrackStatusScreen from './screens/TrackStatusScreen';
import splash1 from './screens/splash1';
import splash2 from './screens/splash2';
import splash3 from './screens/splash3';
import apppermission1 from './screens/apppermission1';
import apppermission2 from './screens/apppermission2';
import frame427786 from './screens/frame427786';
import frame7 from './screens/frame7';
import CivilIDInput from './screens/CivilIDInput';
import home from './screens/home';
import vehicle1 from './screens/vehicle1';



const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="splash1" component={splash1} options={{ headerShown: false }} />
        <Stack.Screen name="splash2" component={splash2} options={{ headerShown: false }} />
        <Stack.Screen name="splash3" component={splash3} options={{ headerShown: false }} />
        <Stack.Screen name="apppermission1" component={apppermission1} options={{ headerShown: false }} />
        <Stack.Screen name="apppermission2" component={apppermission2} options={{ headerShown: false }} />
        <Stack.Screen name="frame427786" component={frame427786} options={{ headerShown: false }} />
        <Stack.Screen name="frame7" component={frame7} options={{ headerShown: false }} />
        <Stack.Screen name="CivilIDInput" component={CivilIDInput} options={{ headerShown: false }} />
        <Stack.Screen name="home" component={home} options={{ headerShown: false }} />
        <Stack.Screen name="vehicle1" component={vehicle1} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


