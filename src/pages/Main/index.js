import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, List, ButtonAdd } from './styles';
import Review from '../../components/Review';

const Main = ({ cars, navigation }) => {
  return (
    <Container>
      <List
        data={cars}
        keyExtractor={car => String(car.id)}
        renderItem={({ item }) => (<Review key={item.id} car={item} />)}
      />
      <ButtonAdd onPress={() => navigation.navigate('AddCar')}>
        <Icon name='add' size={40} color='#FFF' />
      </ButtonAdd>
    </Container>
  )
}

export default Main
