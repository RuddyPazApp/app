import React from 'react';
import Menu from './component/Menu'
import Usuarios from './component/Usuarios'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Notificaciones from './component/Notificaciones';
import Home from './component/Home';
import Splash from './component/Splash';
import Login from './component/Login';
import Ppl from './component/Ppl';
import Perfil from './component/Perfil';
import Videos from './component/Videos';
import Test from './component/Test';
import Select from './component/Select';
import Animation from './component/Animation';
import RecCamera from './component/RecCamera';
import FotoVehiculo from './component/RecCamera';
import CamaraDoc from './component/CamaraDoc';
import CambiarContrasena from './component/CambiarContrasena';
import Agreguement from './component/Agreguement';
import RecuperarPass from './component/RecuperarPass';
import Vimeo_ from './component/Vimeo_';
import Web from './component/Web';


const Stack = createNativeStackNavigator();

function App(): JSX.Element {


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Notificaciones" component={Notificaciones} />
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="Ppl" component={Ppl} />
        <Stack.Screen name="Videos" component={Videos} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Test" component={Test} />
        <Stack.Screen name="Animation" component={Animation} />
        <Stack.Screen name="Select" component={Select} />
        <Stack.Screen name="RecCamera" component={RecCamera} />
        <Stack.Screen name="CamaraDoc" component={CamaraDoc} />
        <Stack.Screen name="FotoVehiculo" component={FotoVehiculo} />
        <Stack.Screen name="CambiarContrasena" component={CambiarContrasena} />
        <Stack.Screen name="Agreguement" component={Agreguement} />
        <Stack.Screen name="RecuperarPass" component={RecuperarPass} />
        <Stack.Screen name="Vimeo_" component={Vimeo_} />
        <Stack.Screen name="Web" component={Web} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;