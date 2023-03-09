import {ScrollView, StyleSheet, View} from 'react-native';
import {Card} from '../Card/Card';
import {mockData} from './mockData';

export default function CardsList() {
  return (
    <View style={styles.scrollView} testID="CardsList">
      <ScrollView horizontal>
        {/*{mockData.map(item => (*/}
        {/*  <Card {...item} />*/}
        {/*))}*/}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    maxHeight: 210,
  },
});
