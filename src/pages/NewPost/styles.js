import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const Input = styled.TextInput`
  background-color: transparent;
  margin: 0 10px;
  font-size: 20px;
  color: #131313;
`;

export const Button = styled.TouchableOpacity`
  background-color: #e52246;
  margin-right: 7px;
  border-radius: 12px;
  padding: 5px 12px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
`;
