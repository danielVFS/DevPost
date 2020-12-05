import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

import {Container, ButtonPost} from './styles';

export default function Home() {
  const navigation = useNavigation();

  return (
    <Container>
      <ButtonPost onPress={() => navigation.navigate('NewPost')}>
        <Icon name="edit-2" color="#FFF" size={25} />
      </ButtonPost>
    </Container>
  );
}
