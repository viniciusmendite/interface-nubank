import React from 'react';
import {StatusBar} from 'react-native';

import attachMoney from '../assets/material-icons/dolar.png';
import visibilityOff from '../assets/material-icons/money-off.png';

import Header from '../components/Header';
import Tabs from '../components/Tabs';
import Menu from '../components/Menu';

import {
  Container,
  Content,
  Card,
  CardHeader,
  Icon,
  CardContent,
  Title,
  Description,
  CardFooter,
  Annotation,
} from './styles';

export default function Main() {
  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#8b10ae" />
      <Header />

      <Content>
        <Menu />
        <Card>
          <CardHeader>
            <Icon source={attachMoney} />
            <Icon source={visibilityOff} />
          </CardHeader>
          <CardContent>
            <Title>Saldo disponível</Title>
            <Description>R$ 197.611,65</Description>
          </CardContent>
          <CardFooter>
            <Annotation>
              Tranferência de R$ 100,00 recebida de Vinícius Mendite hoje às
              08:00h
            </Annotation>
          </CardFooter>
        </Card>
      </Content>

      <Tabs />
    </Container>
  );
}
