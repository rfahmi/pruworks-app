import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import Splash from '../../screens/SplashScreen';
import {RootState} from '../redux';
import {setIsLogin} from '../redux/slice/authSlice';
import {RootStackParamList} from '../../types/Screen';

const Stack = createStackNavigator<RootStackParamList>();

const RootStack = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const dispatch = useDispatch();
  const isLogin = useSelector((state: RootState) => state.auth.isLogin);

  useEffect(() => {
    dispatch(setIsLogin(false));
    setTimeout(() => setLoading(false), 600);
  }, [dispatch]);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {loading ? (
        <Stack.Screen name="Splash" component={Splash} />
      ) : isLogin ? (
        <Stack.Screen name="App" component={AppStack} />
      ) : (
        <Stack.Screen name="Auth" component={AuthStack} />
      )}
    </Stack.Navigator>
  );
};

export default RootStack;
