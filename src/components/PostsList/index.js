import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  Header,
  Avatar,
  Name,
  ContentView,
  Content,
  Actions,
  LikeButton,
  Like,
  TimePost,
} from './styles';

export default function PostsList({data, userId}) {
  return (
    <Container>
      <Header>
        <Avatar source={require('../../assets/avatar.png')} />
        <Name>Daniel</Name>
      </Header>

      <ContentView>
        <Content>Este é o meu primeiro post aqui na plataforma!</Content>
      </ContentView>

      <Actions>
        <LikeButton>
          <Like>
            60
            <Icon name="heart-plus-outline" size={20} color="#E52240" />{' '}
          </Like>
        </LikeButton>

        <TimePost>há 10 minutos atrás</TimePost>
      </Actions>
    </Container>
  );
}
