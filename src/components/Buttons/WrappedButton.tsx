import React from 'react';
import {Button} from 'native-base';

interface Props {
  title?: string;
  icon?: JSX.Element | JSX.Element[];
  onPress?: () => void;
}

export const WrappedButton: React.FC<Props> = ({title, icon, onPress}) => {
  return (
    <Button
      variant="link"
      size="md"
      onPress={onPress}
      leftIcon={icon}
      _text={{fontWeight: '400', color: 'white'}}
      pl="0"
      m="0">
      {title}
    </Button>
  );
};
