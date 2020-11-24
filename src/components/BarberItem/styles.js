import styled from 'styled-components/native';

export const Card = styled.TouchableOpacity`
  background: #FFFFFF;
  flex-direction: row;
  margin-bottom: 20px;
  border-radius: 20px;
  padding: 15px;
`;

export const Avatar = styled.Image`
  width: 88px;
  height: 88px;
  border-radius: 20px;
`;

export const InfoCard = styled.View`
  margin-left: 20px;
  justify-content: space-between;
`;

export const UserName = styled.Text`
  font-size: 17px;
  font-weight: bold;
`;

export const ProfileButton = styled.View`
  width: 85px;
  height: 26px;
  border: 1px solid #4EADBE;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const ProfileButtonText = styled.Text`
  font-size: 13px;
  color: #268596;
`;
