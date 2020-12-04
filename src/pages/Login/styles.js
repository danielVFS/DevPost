import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #36393f;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 55px;
  font-weight: bold;
  font-style: italic;
  margin-bottom: 10px;
`;

export const InputArea = styled.View`
  display: flex;
  flex-direction: row;
  width: 80%;
  align-items: center;
  justify-content: center;

  margin-bottom: 10px;
`;

export const Input = styled.TextInput`
  flex: 1;
  background-color: #eee;
  color: #36393f;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  padding: 10px;
  font-size: 17px;
`;

export const Button = styled.TouchableOpacity`
  width: 80%;
  background-color: #e52246;
  padding: 10px;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 20px;
`;

export const SignUpButton = styled.TouchableOpacity`
  width: 100%;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
`;

export const SignUpButtonText = styled.Text`
  color: #ddd;
  font-size: 15px;
  font-weight: bold;
`;
