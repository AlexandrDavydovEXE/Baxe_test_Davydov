import React from 'react';
import {View} from 'react-native';
import {Heading, Button, Box, Text} from 'native-base';
import MenuIcon from '../../assets/icons/Menu';
import AvatarIcon from '../../assets/icons/AvatarIcon';

const Header = () => {
  return (
    <View style={{backgroundColor: '#DEE0E2'}}>
      <Box
        flexDir="row"
        backgroundColor="#DEE0E2"
        alignItems="center"
        px="6"
        pb="3">
        <Box flex="2" alignItems="flex-start">
          <Button
            variant="link"
            size="md"
            onPress={() => {}}
            leftIcon={<AvatarIcon />}
            _text={{fontWeight: '400'}}
            pl="0"
            m="0"
          />
        </Box>

        <Heading
          flex="6"
          fontSize="lg"
          textTransform="uppercase"
          color="black"
          fontWeight="300"
          letterSpacing={1}
          textAlign="center">
          <Text>Davydov-test</Text>
        </Heading>

        <Box flex="2" alignItems="flex-end" pb="0">
          <Button
            variant="link"
            size="md"
            onPress={() => {}}
            leftIcon={<MenuIcon />}
            _text={{fontWeight: '400'}}
            pl="0"
            m="0"
          />
        </Box>
      </Box>
    </View>
  );
};

export default Header;
