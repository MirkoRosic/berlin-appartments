import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { Navigation } from './navigation';

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
    <SafeAreaView style={styles.safeArea}>
      <Navigation />
    </SafeAreaView>
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
