import React, {useState} from 'react';
import {Text} from 'react-native';

import {
  Container,
  Title,
  Input,
  Button,
  ButtonText,
  SignUpButton,
  SignUpButtonText,
} from './styles';

export default function Login() {
  const [login, setLogin] = useState(true);

  function toggleLogin() {
    setLogin(!login);
  }

  if (login) {
    return (
      <Container>
        <Title>
          Dev<Text style={{color: '#E52246'}}>Post</Text>
        </Title>

        <Input placeholder="email@gmail.com" />
        <Input placeholder="*******" secureTextEntry={true} />

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

      <Input placeholder="Seu Nome" />
      <Input placeholder="email@gmail.com" />
      <Input placeholder="*******" secureTextEntry={true} />

      <Button>
        <ButtonText>Cadastrar</ButtonText>
      </Button>

      <SignUpButton onPress={toggleLogin}>
        <SignUpButtonText>Já tenho uma conta.</SignUpButtonText>
      </SignUpButton>
    </Container>
  );
}
