import React from 'react';
import {StatusBar} from 'react-native';

import Header from '../components/Header';
import Tabs from '../components/Tabs';
import {Container} from './styles';

export default function Main() {
  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#8b10ae" />
      <Header />
      <Tabs />
    </Container>
  );
}
