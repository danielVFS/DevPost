import React, {useState, useLayoutEffect, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';

import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';

import {AuthContext} from '../../hooks/auth';

import {Container, Input, Button, ButtonText} from './styles';

export default function NewPost() {
  const navigation = useNavigation();
  const {user} = useContext(AuthContext);

  const [post, setPost] = useState('');

  async function handlePost() {
    if (post === '') {
      alert('Seu post não possui conteúdo');
    }

    let avatarUrl = null;
    try {
      let response = await storage()
        .ref('users')
        .child(user?.uid)
        .getDownloadURL();
      avatarUrl = response;
    } catch (error) {
      avatarUrl = null;
    }

    await firestore()
      .collection('posts')
      .add({
        created: new Date(),
        content: post,
        author: user.name,
        likes: 0,
        avatarUrl: avatarUrl,
        userId: user.uid,
      })
      .then(() => {
        setPost('');
        console.log('Post criado com sucesso');
      })
      .catch((error) => {
        console.log(error);
      });

    navigation.goBack();
  }

  useLayoutEffect(() => {
    const options = navigation.setOptions({
      headerTitle: 'Novo Post',
      headerRight: () => (
        <Button onPress={() => handlePost()}>
          <ButtonText>Compartilhar</ButtonText>
        </Button>
      ),
    });
  }, [navigation, post]);

  return (
    <Container>
      <Input
        placeholder="O que está acontecendo ?!"
        placeholderTextColor="#131313"
        multiline={true}
        maxLength={300}
        value={post}
        onChangeText={(text) => setPost(text)}
        autoCorrect={false}
      />
    </Container>
  );
}
