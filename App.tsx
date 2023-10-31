import { View, StatusBar } from 'react-native';
import { SSRProvider } from '@react-aria/ssr';
import { NativeBaseProvider } from 'native-base';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { THEME }from './src/theme'
import { Loading } from '@components/Loading';
import { Routes } from '@routes/index';
export default function App() {
  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold})
  return (
    <SSRProvider>
      <NativeBaseProvider theme={THEME}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        {fontsLoaded ? <Routes/>: <Loading/>}
        </NativeBaseProvider>
    </SSRProvider>
  );
}
