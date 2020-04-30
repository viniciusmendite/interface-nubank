import React from 'react';
import {StatusBar} from 'react-native';

import {Animated} from 'react-native';
import {PanGestureHandler, State} from 'react-native-gesture-handler';

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
  let offset = 0;
  const translateY = new Animated.Value(0);
  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    {
      useNativeDriver: true,
    },
  );
  const onHandlerStateChanged = event => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      const {translationY} = event.nativeEvent;

      offset += translationY;

      if (translationY >= 100) {
        opened = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }
      Animated.timing(translateY, {
        toValue: opened ? 320 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 320 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  };

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#8b10ae" />
      <Header />

      <Content>
        <Menu translateY={translateY} />

        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChanged}>
          <Card
            style={{
              transform: [
                {
                  translateY: translateY.interpolate({
                    inputRange: [0, 320],
                    outputRange: [0, 320],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            }}>
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
        </PanGestureHandler>
      </Content>

      <Tabs translateY={translateY} />
    </Container>
  );
}
