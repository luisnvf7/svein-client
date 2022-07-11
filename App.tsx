import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/navigations/Navigation'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NativeBaseProvider, INativebaseConfig } from 'native-base';

const config: INativebaseConfig = {
  // rest of the config keys like dependencies can go here
  strictMode: 'warn',
};

export default function App() {
  return (
    <SafeAreaProvider>
      <NativeBaseProvider config={config}>
      <StatusBar style='auto' hidden={true} />
        <Navigation />
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});