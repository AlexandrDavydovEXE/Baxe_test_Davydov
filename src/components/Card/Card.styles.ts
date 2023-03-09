import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

let deviceWidth = Dimensions.get('window').width;

const heights = {
  'promo-card-height': 204,
  'promo-content-max-width': 192,
};

const spacings = {
  'spacing-1': 4,
  'spacing-3': 12,
  'spacing-5': 20,
  'spacing-10': 40,
};

export default StyleSheet.create({
  promotionCard: {
    position: 'relative',
    height: heights['promo-card-height'],
    width: deviceWidth * 0.9,
    borderRadius: spacings['spacing-5'],
    backgroundColor: '#e5e4e2',
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'yellow',
    marginHorizontal: 10,
  },
  promotionBody: {
    height: '75%',
    justifyContent: 'space-around',
    paddingVertical: 20,
    paddingHorizontal: spacings['spacing-5'],
    zIndex: 1,
  },
  promotionName: {
    maxWidth: heights['promo-content-max-width'],
    color: 'darkgrey',
    fontWeight: 'bold',
  },
  promotionTitle: {
    fontSize: spacings['spacing-10'],
    fontWeight: 'bold',
    maxWidth: heights['promo-content-max-width'],
    color: 'darkgrey',
    textTransform: 'capitalize',
  },
  amount: {
    marginTop: spacings['spacing-1'],
    maxWidth: heights['promo-content-max-width'],
    color: 'darkgrey',
  },
  promotionFooter: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '25%',
  },
  promotionFooterContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacings['spacing-3'],
    height: '100%',
    backgroundColor: '#B7BDCD',
  },
});
