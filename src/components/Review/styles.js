import styled from 'styled-components/native';

export const Container = styled.View`
  align-self: stretch;
  background: #fff;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 15px;
  margin-bottom: 10px;
`;

export const ContainerTitle = styled.View`
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 10px;
`;

export const ContainerInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Brand = styled.Text`
  font-size: 16px;
  color: #333;
  max-width: 200px;
  margin-left: 10px;
`;

export const Rank = styled.Text`
  font-size: 16px;
  color: ${props => props.aproved ? '#4caf50' : '#f44336'};
  margin-left: 5px;
`;

export const Model = styled.Text`
  font-size: 14px;
  color: #333;
  align-self: stretch;
  margin-left: 10px;
`;
