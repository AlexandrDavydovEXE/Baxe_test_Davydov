import {ScrollView, StyleSheet, View} from 'react-native';
import {Card} from '../Card/Card';
import {CardProps} from '../Card/Card.types';
import {FC} from 'react';
import {getTestProps} from '../../helpers/test-props';
import {CONTAINER, SCROLL} from './CardsList.selectors';

interface ICardsListProps {
  cards: CardProps[];
}

const CardsList: FC<ICardsListProps> = ({cards}) => {
  return (
    <View style={styles.scrollView} {...getTestProps(CONTAINER)}>
      <ScrollView horizontal {...getTestProps(SCROLL)}>
        {cards.map(item => (
          <Card {...item} />
        ))}
      </ScrollView>
    </View>
  );
};
export default CardsList;

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    maxHeight: 210,
  },
});
