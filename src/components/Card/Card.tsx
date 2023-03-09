// @flow
import * as React from 'react';
import styles from './Card.styles';
import {View, Text, Pressable} from 'react-native';
import {getTestProps} from '../../helpers/test-props';
import {
  CREDIT_CARD,
  CREDIT_CARD_NAME,
  CREDIT_CARD_TITLE,
  CREDIT_CARD_AMOUNT,
  CREDIT_CARD_FOOTER,
} from './Card.selectors';
import {FC} from 'react';
import {CardProps} from './Card.types';
import {WrappedButton} from '../Buttons/WrappedButton';
import {Box} from 'native-base';
import TransferIcon from '../../../assets/icons/TransferIcon';
import DepositIcon from '../../../assets/icons/DepositIcon';
import PointsIcon from '../../../assets/icons/PointsIcon';

export const Card: FC<CardProps> = ({action, amount, name, title, id = 1}) => {
  return (
    <Pressable
      {...getTestProps(CREDIT_CARD)}
      onPress={action}
      style={styles.promotionCard}>
      <View style={styles.promotionBody}>
        <Text
          {...getTestProps(CREDIT_CARD_NAME)}
          style={styles.promotionName}
          numberOfLines={3}
          ellipsizeMode="tail">
          {name}
        </Text>
        {!!title && (
          <Text
            {...getTestProps(CREDIT_CARD_TITLE)}
            style={styles.promotionTitle}
            numberOfLines={2}
            ellipsizeMode="tail">
            € {title}
          </Text>
        )}
        <Text
          {...getTestProps(CREDIT_CARD_AMOUNT)}
          style={styles.amount}
          numberOfLines={3}
          ellipsizeMode="tail">
          € {amount ? amount : 0.0}
        </Text>
      </View>
      <View
        style={styles.promotionFooter}
        {...getTestProps(CREDIT_CARD_FOOTER)}>
        <View style={styles.promotionFooterContent}>
          <Box
            flexDir="row"
            backgroundColor="#B7BDCD"
            alignItems="center"
            justifyContent="space-between"
            px="6"
            pb="3">
            <WrappedButton title={'Deposit'} icon={<DepositIcon />} />
            <WrappedButton title={'Transfer'} icon={<TransferIcon />} />
            <WrappedButton icon={<PointsIcon />} />
          </Box>
        </View>
      </View>
    </Pressable>
  );
};
