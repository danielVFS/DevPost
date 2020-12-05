import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';

import {AuthContext} from '../../hooks/auth';

export default function Profile() {
  const {signOut} = useContext(AuthContext);

  return (
    <View>
      <Text>Profile</Text>
      <Button title="Sair" onPress={signOut} />
    </View>
  );
}
