import {StyleSheet} from 'react-native';
// import {Dimensions} from 'react-native';

// let deviceWidth = Dimensions.get('window').width;
let deviceWidth = 500;

const heights = {
  'promo-card-width-percentage': 0.88,
  'promo-card-height': 204,
  'promo-content-max-width': 192,
  'promo-terms-and-conditions-min-width': 136,
  'promo-action-max-width': 155,
  'promo-odds-boost-tag-height': 18,
  'bet-button-height': 60,
  'bet-button-width': 64,
};

const spacings = {
  'spacing-half': 2,
  'spacing-1': 4,
  'spacing-2': 8,
  'spacing-3': 12,
  'spacing-4': 16,
  'spacing-5': 20,
  'spacing-6': 24,
  'spacing-7': 28,
  'spacing-8': 32,
  'spacing-10': 40,
  'spacing-12': 48,
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
    // borderColor: '#D8D8D8B2',
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
  termsAndConditionsSummary: {
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
