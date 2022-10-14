import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { Navigation } from './navigation';
import { AppProvider } from './context/context';

export default function App() {
  const [fontsLoaded] = useFonts({
    point: require('./assets/fonts/PointRegular.otf'),
    pointLight: require('./assets/fonts/PointLight.otf'),
    milkman: require('./assets/fonts/MilkmanRegular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <AppProvider>
      <SafeAreaView style={styles.safeArea}>
        <Navigation />
      </SafeAreaView>
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    display: 'flex',
    position: 'relative',
    backgroundColor: 'white',
    height: '100%',
    overflow: 'hidden',
  },
});
