import React from 'react';

import {Container, Top, Logo, ArrowDown, Title} from './styles';

import logo from '../../assets/Nubank_Logo.png';
import arrowDown from '../../assets/material-icons/arrow-down.png';

export default function Header() {
  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Title>Vinícius</Title>
      </Top>
      <ArrowDown source={arrowDown} />
    </Container>
  );
}
