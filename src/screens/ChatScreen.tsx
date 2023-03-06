import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Header from '../components/Header';

export default function ChatScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.viewBox}>
        <Text>Chat Screen!</Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEE0E2',
  },
  viewBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
});
