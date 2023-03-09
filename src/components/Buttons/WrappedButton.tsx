import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  StyleProp,
  ViewStyle,
} from 'react-native';

interface Props {
  title: string;
  buttonStyle?: StyleProp<ViewStyle>;
  icon?: any;
  onPress?: () => void;
}

export const Button: React.FC<Props> = ({
  title,
  icon,
  buttonStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <View>
        <Image source={icon} />
      </View>
      <View>
        <Text style={{color: 'white'}}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
