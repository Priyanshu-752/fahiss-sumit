
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
import VehicleDetailsPage from './screens/VehicleDetailsPage';
import policies1 from './screens/policies1';
import policies2 from './screens/policies2';
import registration from './screens/registration';
import profile1 from './screens/profile1';
import profile2 from './screens/profile2';
import profile3 from './screens/profile3';
import privacypolicy from './screens/privacypolicy';
import terms from './screens/terms';
import supporthm from './screens/supporthm';
import supportfaq from './screens/supportfaq';
import supportasi from './screens/supportasi';
import supportasi1 from './screens/supportasi1';
import supportasi2 from './screens/supportasi2';
import supportfaq1 from './screens/supportfaq1';
import supportfaq2 from './screens/supportfaq2';
import registrationrenew from './screens/registrationrenew';

import RegistrationRenew1 from './screens/registrationrenew1';
import VehicleTechnicalInspection from './screens/VehicleTechnicalInspection';
import VehicleTechnicalInspection1 from './screens/VehicleTechnicalInspection1';
import Submitvideo from './screens/Submitvideo';
import Paysecurely from './screens/Paysecurely';
import Paysecurely1 from './screens/Paysecurely1';
import Supportchat from './screens/Supportchat';




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
        <Stack.Screen name="VehicleDetailsPage" component={VehicleDetailsPage} options={{ headerShown: false }} />
        <Stack.Screen name="policies1" component={policies1} options={{ headerShown: false }} />
        <Stack.Screen name="policies2" component={policies2} options={{ headerShown: false }} />
        <Stack.Screen name="TrackStatusScreen" component={TrackStatusScreen} options={{ headerShown: false }} />
        <Stack.Screen name="registration" component={registration} options={{ headerShown: false }} />
        <Stack.Screen name="profile1" component={profile1} options={{ headerShown: false }} />
        <Stack.Screen name="profile2" component={profile2} options={{ headerShown: false }} />
        <Stack.Screen name="profile3" component={profile3} options={{ headerShown: false }} />
        <Stack.Screen name="privacypolicy" component={privacypolicy} options={{ headerShown: false }} />
        <Stack.Screen name="terms" component={terms} options={{ headerShown: false }} />
        <Stack.Screen name="supporthm" component={supporthm} options={{ headerShown: false }} />
        <Stack.Screen name="supportfaq" component={supportfaq} options={{ headerShown: false }} />
        <Stack.Screen name="supportasi" component={supportasi} options={{ headerShown: false }} />
        <Stack.Screen name="supportasi1" component={supportasi1} options={{ headerShown: false }} />
        <Stack.Screen name="supportasi2" component={supportasi2} options={{ headerShown: false }} />
        <Stack.Screen name="supportfaq1" component={supportfaq1} options={{ headerShown: false }} />
        <Stack.Screen name="supportfaq2" component={supportfaq2} options={{ headerShown: false }} />
        <Stack.Screen name="registrationrenew" component={registrationrenew} options={{ headerShown: false }} />
        <Stack.Screen name="registrationrenew1" component={RegistrationRenew1} options={{ headerShown: false }} />
        <Stack.Screen name="VehicleTechnicalInspection" component={VehicleTechnicalInspection} options={{ headerShown: false }} />
        <Stack.Screen name="VehicleTechnicalInspection1" component={VehicleTechnicalInspection1} options={{ headerShown: false }} />
        <Stack.Screen name="Submitvideo" component={Submitvideo} options={{ headerShown: false }} />
        <Stack.Screen name="Paysecurely" component={Paysecurely} options={{ headerShown: false }} />
        <Stack.Screen name="Paysecurely1" component={Paysecurely1} options={{ headerShown: false }} />
        <Stack.Screen name="Supportchat" component={Supportchat} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


