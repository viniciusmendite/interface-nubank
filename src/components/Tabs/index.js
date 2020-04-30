import React from 'react';

import {Container, TabsContainer, TabItem, Icon, TabText} from './styles';
import personAdd from '../../assets/material-icons/person-add.png';
import chatBuble from '../../assets/material-icons/chat-buble.png';
import arrowDownWard from '../../assets/material-icons/arrow-downward.png';
import arrowUpWard from '../../assets/material-icons/arrow-upward.png';
import lock from '../../assets/material-icons/lock.png';

export default function Tabs() {
  return (
    <Container>
      <TabsContainer>
        <TabItem>
          <Icon source={personAdd} />
          <TabText>Indicar Amigos</TabText>
        </TabItem>
        <TabItem>
          <Icon source={chatBuble} />
          <TabText>Cobrar</TabText>
        </TabItem>
        <TabItem>
          <Icon source={arrowDownWard} />
          <TabText>Depositar</TabText>
        </TabItem>
        <TabItem>
          <Icon source={arrowUpWard} />
          <TabText>Transferir</TabText>
        </TabItem>
        <TabItem>
          <Icon source={lock} />
          <TabText>Bloquear Cartão</TabText>
        </TabItem>
      </TabsContainer>
    </Container>
  );
}
