import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Card, Avatar, InfoCard, UserName, ProfileButton, ProfileButtonText } from './styles';

import Stars from '../../components/Stars';

export default ({ data }) => {
  const navigation = useNavigation();
  
  const handleClick = () => {
    navigation.navigate('Barber', {
      id: data.id,
      avatar: data.avatar,
      name: data.name,
      stars: data.stars,
    });
  }
  return (
    <Card onPress={handleClick}>
      <Avatar source={{uri: data.avatar}} />
      <InfoCard>
        <UserName>{data.name}</UserName>
        <Stars stars={data.stars} showNumber={true} />

        <ProfileButton>
          <ProfileButtonText>Ver Perfil</ProfileButtonText>
        </ProfileButton>
      </InfoCard>
    </Card>
  );
}