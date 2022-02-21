import React from 'react';
import { SafeAreaView } from 'react-native';
import { TareaScreen } from './src/screens/TareaScreen';
//import { FlexScreen } from './src/screens/FlexScreen';
//import { PositionScreen } from './src/screens/PositionScreen';
//import { DimensionesScreen } from './src/screens/DimensionesScreen';
//import { ContadorScreen } from './src/screens/ContadorScreen';
//import { HolaMundoScreen } from './src/screens/HolaMundoScreen';
//import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
//import { FlexDirection } from './src/screens/FlexDirection';

export const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
    {/*<HolaMundoScreen />*/}
    {/*<ContadorScreen/>*/}
    {/*<BoxObjectModelScreen />*/}
    {/*<DimensionesScreen/>*/}
    {/*<PositionScreen />*/}
    {/*<FlexScreen/>*/}
    {/*<FlexDirection/>*/}
    <TareaScreen/>
    </SafeAreaView>
  );
};

