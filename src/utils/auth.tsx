import AsyncStorage from '@react-native-async-storage/async-storage';

export const isLogin = async (): Promise<boolean> => {
  return !!(await AsyncStorage.getItem('api_token'));
};
