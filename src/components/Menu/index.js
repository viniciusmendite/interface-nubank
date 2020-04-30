import React from 'react';
import QRCode from 'react-native-qrcode-svg';

import help from '../../assets/material-icons/help.png';
import person from '../../assets/material-icons/person-outline.png';
import creditCard from '../../assets/material-icons/credit-card.png';
import smartphone from '../../assets/material-icons/smartphone.png';

import {
  Container,
  Code,
  Nav,
  NavItem,
  Icon,
  NavText,
  SignOutButton,
  SignOutButtonText,
} from './styles';

export default function Menu({translateY}) {
  return (
    <Container
      style={{
        opacity: translateY.interpolate({
          inputRange: [0, 150],
          outputRange: [0, 1],
        }),
      }}>
      <Code>
        <QRCode value="http://www.google.com.br" color="#8b10ae" size={80} />
      </Code>
      <Nav>
        <NavItem>
          <Icon source={help} />
          <NavText>Me ajuda</NavText>
        </NavItem>
        <NavItem>
          <Icon source={person} />
          <NavText>Perfil</NavText>
        </NavItem>
        <NavItem>
          <Icon source={creditCard} />
          <NavText>Configurar cartão</NavText>
        </NavItem>
        <NavItem>
          <Icon source={smartphone} />
          <NavText>Configurações do app</NavText>
        </NavItem>
      </Nav>

      <SignOutButton onPress={() => {}}>
        <SignOutButtonText>SAIR DO APP</SignOutButtonText>
      </SignOutButton>
    </Container>
  );
}
