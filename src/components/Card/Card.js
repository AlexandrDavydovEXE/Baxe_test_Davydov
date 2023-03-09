// @flow
import * as React from 'react';
import styles from './Card.styles';
import {ImageBackground, View, Text, Pressable} from 'react-native';
import {LinearGradient} from 'react-native-svg';
import {getTestProps} from '../../helpers/test-props';
import {
  PROMOTION_CARD,
  PROMOTION_CARD_BET_BUTTON,
  PROMOTION_CARD_NAME,
  PROMOTION_CARD_ODDS_BOOST_ICON,
  PROMOTION_CARD_TERMS_LABEL,
  PROMOTION_CARD_TERMS_PRESSABLE,
  PROMOTION_CARD_TERMS_SUMMARY,
  PROMOTION_CARD_TITLE,
} from './Card.selectors';
import {FunctionComponent} from 'react';
import {CardProps} from './Card.types';
import {WrappedButton} from '../Buttons/WrappedButton';
import {Button, Box} from 'native-base';
import TransferIcon from '../../icons/TransferIcon';
import DepositIcon from '../../icons/DepositIcon';
import PointsIcon from '../../icons/PointsIcon';

export const Card: FunctionComponent<CardProps> = ({
  action,
  amount,
  name,
  title,
}) => {
  return (
    <View {...getTestProps(PROMOTION_CARD, false)} style={styles.promotionCard}>
      <View style={styles.promotionBody}>
        <Text
          {...getTestProps(PROMOTION_CARD_NAME)}
          style={styles.promotionName}
          numberOfLines={3}
          ellipsizeMode="tail">
          {name}
        </Text>
        {!!title && (
          <Text
            {...getTestProps(PROMOTION_CARD_TITLE)}
            style={styles.promotionTitle}
            numberOfLines={2}
            ellipsizeMode="tail">
            € {title}
          </Text>
        )}
        <Text
          {...getTestProps(PROMOTION_CARD_TERMS_SUMMARY)}
          style={styles.termsAndConditionsSummary}
          numberOfLines={3}
          ellipsizeMode="tail">
          € {amount ? amount : 0.0}
        </Text>
      </View>
      <View style={styles.promotionFooter}>
        <View style={styles.promotionFooterContent}>
          {/*<Box*/}
          {/*  flexDir="row"*/}
          {/*  backgroundColor="#B7BDCD"*/}
          {/*  alignItems="center"*/}
          {/*  justifyContent="space-between"*/}
          {/*  px="6"*/}
          {/*  pb="3">*/}
          <WrappedButton title={'Deposit'} icon={<DepositIcon />} />
          <WrappedButton title={'Transfer'} icon={<TransferIcon />} />
          <WrappedButton icon={<PointsIcon />} />
          {/*</Box>*/}
        </View>
      </View>
    </View>
  );
};
