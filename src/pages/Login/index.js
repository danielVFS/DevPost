import React, {useState} from 'react';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  Title,
  InputArea,
  Input,
  Button,
  ButtonText,
  SignUpButton,
  SignUpButtonText,
} from './styles';

export default function Login() {
  const [login, setLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function toggleLogin() {
    setLogin(!login);
  }

  if (login) {
    return (
      <Container>
        <Title>
          Dev<Text style={{color: '#E52246'}}>Post</Text>
        </Title>

        <InputArea>
          <Icon
            name="user"
            size={20}
            color="#FFF"
            style={{
              backgroundColor: '#e52246',
              width: 50,
              height: 48,
              borderTopLeftRadius: 25,
              borderBottomLeftRadius: 25,
              textAlign: 'center',
              lineHeight: 50,
            }}
          />
          <Input
            placeholder="email@gmail.com"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </InputArea>
        <InputArea>
          <Icon
            name="lock"
            size={20}
            color="#FFF"
            style={{
              backgroundColor: '#e52246',
              width: 50,
              height: 48,
              borderTopLeftRadius: 25,
              borderBottomLeftRadius: 25,
              textAlign: 'center',
              lineHeight: 50,
            }}
          />
          <Input
            placeholder="*******"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </InputArea>

        <Button>
          <ButtonText>Acessar</ButtonText>
        </Button>

        <SignUpButton onPress={toggleLogin}>
          <SignUpButtonText>Criar uma conta</SignUpButtonText>
        </SignUpButton>
      </Container>
    );
  }

  return (
    <Container>
      <Title>
        Dev<Text style={{color: '#E52246'}}>Post</Text>
      </Title>

      <InputArea>
        <Icon
          name="edit-2"
          size={20}
          color="#FFF"
          style={{
            backgroundColor: '#e52246',
            width: 50,
            height: 48,
            borderTopLeftRadius: 25,
            borderBottomLeftRadius: 25,
            textAlign: 'center',
            lineHeight: 50,
          }}
        />
        <Input
          placeholder="Seu Nome"
          value={name}
          onChangeText={(text) => setName(text)}
        />
      </InputArea>
      <InputArea>
        <Icon
          name="user"
          size={20}
          color="#FFF"
          style={{
            backgroundColor: '#e52246',
            width: 50,
            height: 48,
            borderTopLeftRadius: 25,
            borderBottomLeftRadius: 25,
            textAlign: 'center',
            lineHeight: 50,
          }}
        />
        <Input
          placeholder="email@gmail.com"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </InputArea>
      <InputArea>
        <Icon
          name="lock"
          size={20}
          color="#FFF"
          style={{
            backgroundColor: '#e52246',
            width: 50,
            height: 48,
            borderTopLeftRadius: 25,
            borderBottomLeftRadius: 25,
            textAlign: 'center',
            lineHeight: 50,
          }}
        />
        <Input
          placeholder="*******"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </InputArea>

      <Button>
        <ButtonText>Cadastrar</ButtonText>
      </Button>

      <SignUpButton onPress={toggleLogin}>
        <SignUpButtonText>Já tenho uma conta.</SignUpButtonText>
      </SignUpButton>
    </Container>
  );
}
