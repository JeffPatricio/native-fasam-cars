import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, ContainerTitle, ContainerInfo, Brand, Rank, Model } from './styles';

const Review = ({ car }) => {
  return (
    <Container>
      <ContainerTitle>
        <ContainerInfo>
          <Icon name='local-offer' size={20} color='#2c387e' />
          <Brand>{car.brand}</Brand>
        </ContainerInfo>
        <ContainerInfo>
          <Icon name='star' size={20} color='#2c387e' />
          <Rank aproved={car.rank >= 6}>{car.rank}</Rank>
        </ContainerInfo>
      </ContainerTitle>
      <ContainerInfo>
        <Icon name='directions-car' size={20} color='#2c387e' />
        <Model>{car.model}</Model>
      </ContainerInfo>
    </Container>
  )
}

export default Review
