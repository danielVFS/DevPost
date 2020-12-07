import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {formatDistance} from 'date-fns';
import {ptBR} from 'date-fns/locale';

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
  function formatTimePost() {
    const datePost = new Date(data.created.seconds * 1000);

    return formatDistance(new Date(), datePost, {locale: ptBR});
  }

  return (
    <Container>
      <Header>
        {data.avatarUrl ? (
          <Avatar source={{uri: data.avatarUrl}} />
        ) : (
          <Avatar source={require('../../assets/avatar.png')} />
        )}
        <Name>{data?.author}</Name>
      </Header>

      <ContentView>
        <Content>{data?.content}</Content>
      </ContentView>

      <Actions>
        <LikeButton>
          <Like>
            {data.likes === 0 ? '' : data?.likes}
            <Icon
              name={data?.likes === 0 ? 'heart-plus-outline' : 'cards-heart'}
              size={20}
              color="#E52240"
            />
          </Like>
        </LikeButton>

        <TimePost>{formatTimePost()}</TimePost>
      </Actions>
    </Container>
  );
}
