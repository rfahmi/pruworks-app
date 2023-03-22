import React from 'react';
import {Button, Text} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {setIsLogin} from '../configs/redux/slice/authSlice';
import {LoginScreenRouteProp, LoginScreenNavigationProp} from '../types/Screen';

type Props = {
  route: LoginScreenRouteProp;
  navigation: LoginScreenNavigationProp;
};

const LoginScreen: React.FC<Props> = ({navigation}) => {
  const dispatch = useDispatch();
  return (
    <>
      <Text>Login</Text>
      <Button onPress={() => dispatch(setIsLogin(true))}>LOGIN</Button>
    </>
  );
};

export default LoginScreen;
