import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background: #63C2D1;
  flex: 1;
`;

export const Wrapper = styled.ScrollView`
  flex: 1;
  padding: 20px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

`;

export const FindBarber = styled.Text`
  color: #FFFFFF;
  font-size: 24px;
  font-weight: bold;
  width: 250px;
`;


export const FindYou = styled.View`
  flex-direction: row;
  background: #4EADBE;
  height: 60px;
  border-radius: 30px;
  align-items: center;
  padding-right: 20px;
  padding-left: 20px;
  margin-top: 30px;
  

`;


export const FindYouInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: #FFFFFF;
`;

export const SearchButton = styled.TouchableOpacity`
  width: 26px;
  height: 26px;
`;

export const LocationFinder = styled.TouchableOpacity``;

export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 50px;
`;

export const BarbersList = styled.View`
  margin-top: 30px;
  margin-bottom: 30px;
`;