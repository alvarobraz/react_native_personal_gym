import { StatusBar, View } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { Routes } from '@routes/index';

import { AuthContextProvider } from '@contexts/AuthContext';

import { THEME } from './src/theme';

import { Loading } from '@components/Loading';
// import { SignIn } from '@screens/SignIn';
// import { SignUp } from '@screens/SignUp';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <NativeBaseProvider theme={THEME}>
       <StatusBar 
        barStyle="light-content"       
        backgroundColor="transparent"
        translucent
      />
       <AuthContextProvider>
         {fontsLoaded ? <Routes /> : <Loading />}
       </AuthContextProvider>
    </NativeBaseProvider>
  );
}
