import React, {useContext} from 'react';
import {View, ActivityIndicator} from 'react-native';

import {AuthContext} from '../hooks/auth';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

function Routes() {
  const {signed, loading} = useContext(AuthContext);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#36393F',
        }}>
        <ActivityIndicator size={50} color="#E52246" />
      </View>
    );
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
}

export default Routes;
