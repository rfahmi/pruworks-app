import React from 'react';
import {Text} from 'react-native-paper';
import {HomeScreenRouteProp, HomeScreenNavigationProp} from '../types/Screen';

type Props = {
  route: HomeScreenRouteProp;
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<Props> = ({route}) => {
  return (
    <>
      <Text>Home</Text>
    </>
  );
};

export default HomeScreen;
