import React from 'react';
import AppLoading from 'expo-app-loading';

// Install fonts
import { useFonts, Tangerine_400Regular} from "@expo-google-fonts/tangerine";
import {
  SourceSansPro_400Regular,
  SourceSansPro_600SemiBold,
  SourceSansPro_200ExtraLight
} from "@expo-google-fonts/source-sans-pro";

import {MyProvider} from './context';
import Routes from './components/routes';

export default function App() {
  let [fontsLoaded] = useFonts({
    Tangerine_400Regular,
    SourceSansPro_400Regular,
    SourceSansPro_600SemiBold,
    SourceSansPro_200ExtraLight
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <MyProvider>
      <Routes/>
    </MyProvider>
  );
}
