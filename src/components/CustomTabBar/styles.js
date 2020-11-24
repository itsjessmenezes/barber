import styled from 'styled-components/native';

export const TabArea = styled.View`
height:60px;
background: #4EADBE;
flex-direction: row;
`;

export const TabItem = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const TabItemCenter = styled.TouchableOpacity`
  background-color: #FFF;
  width: 70px;
  height: 70px;
  justify-content: center;
  align-items: center;
  border-radius: 35px;
  border: 3px solid #4EADBE;
  margin-top: -20px;
`;

export const AvatarIcon = styled.Image`
  width: 24px;
  height: 24px;
  border-radius: 12px;
`;