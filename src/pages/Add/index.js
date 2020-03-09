import React, { useState } from 'react';
import { ToastAndroid } from 'react-native';
import { Container, Input, ButtonSave, TextButtonSave, Rank, TextRank, ContainerRanks, LabelRank } from './styles';

const Add = ({ addCar, navigation }) => {

  const [brand, setBrand] = useState('')
  const [model, setModel] = useState('')
  const [rank, setRank] = useState('')
  const ranks = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

  const saveCar = () => {
    if (!brand || !model || !rank) {
      return ToastAndroid.show('Necessary to fill in all fields', ToastAndroid.SHORT)
    }
    if (rank.length > 2 || rank.indexOf('.') >= 0 || isNaN(parseInt(rank))) {
      return ToastAndroid.show('Necessary to fill in a valid notes', ToastAndroid.SHORT)
    }
    addCar({ brand, model, rank })
    ToastAndroid.show('Car added!', ToastAndroid.SHORT)
    navigation.navigate('Cars', {})
  }

  return (
    <Container>
      <Input
        placeholder='Brand'
        returnKeyType='send'
        value={brand}
        onChangeText={text => setBrand(text)}
      />
      <Input
        placeholder='Model'
        returnKeyType='send'
        value={model}
        onChangeText={text => setModel(text)}
      />
      <LabelRank>Rank</LabelRank>
      <ContainerRanks>
        {
          ranks.map(r => (
            <Rank key={r} active={r === rank} onPress={() => setRank(r)}>
              <TextRank active={r === rank}>{r}</TextRank>
            </Rank>
          ))
        }
      </ContainerRanks>
      <ButtonSave onPress={saveCar}>
        <TextButtonSave>Save</TextButtonSave>
      </ButtonSave>
    </Container>
  )
}

export default Add
