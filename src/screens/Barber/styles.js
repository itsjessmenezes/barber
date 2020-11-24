import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background: #FFFFFF;
`;

export const Scroller = styled.ScrollView`
  flex: 1;

`;

export const SwipeDot = styled.View`
  width: 10px;
  height: 10px;
  background: #FFFFFF;
  border-radius: 5px;
  margin: 3px;
`;

export const SwipeDotActive = styled.View`
  width: 10px;
  height: 10px;
  background: #000000;
  border-radius: 5px;
  margin: 3px;
`;

export const SwipeItem = styled.View`
  flex: 1;
  background: #63C2D1;
`;

export const SwipeImage = styled.Image`
  width: 100%;
  height: 240px;
`;



export const HeaderSwiper = styled.View`
  height: 240px;
  background: #63C2D1;
  
`;

export const PageBody = styled.View`
  background: #FFFFFF;
  border-top-left-radius: 50px;
  margin-top: -50px;
  min-height: 400px;
`;

export const ProfileBarberInfo = styled.View`
  flex-direction: row;
  margin-top: -30px;
`;

export const LoadingIcon = styled.ActivityIndicator`
  margin-top: 50px;
`;

export const UserAvatar = styled.Image`
  width: 110px;
  height: 110px;
  border-radius: 20px;
  margin-left: 30px;
  margin-right: 20px;
  border-color: #FFFFFF;
  border-width: 4px;
`;

export const BarberInfo = styled.View`
  flex: 1;
  justify-content: flex-end;
  
`;

export const BarberUserName = styled.Text`
  color: #000000;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;


export const FavButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  background: #FFFFFF;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  right: 0;
  z-index: 9;
`;

export const Services = styled.View`
  margin-top: 30px;
`;

export const ServicesTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #268596;
  margin-left: 30px;
  margin-bottom: 20px;
`;


export const ServiceItem = styled.View`
  flex-direction: row;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 20px;
`;


export const ServiceInfo = styled.View`
  flex: 1;

`;

export const ServiceName = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #268596;
`;

export const ServicePrice = styled.Text`
  font-size: 14px;
  color: #268596;
`;

export const ServiceChooseButton = styled.TouchableOpacity`
  background: #4EADBE;
  border-radius: 10px;
  padding: 10px 15px;
`;

export const ServiceChooseBtn = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #FFFFFF;
`;

export const Comments = styled.View`
  margin-top: 30px;
  margin-bottom: 50px;
`;

export const CommentsItem = styled.View`
  background: #268596;
  padding: 15px;
  border-radius: 10px;
  height: 110px;
  justify-content: center;
  margin-right: 50px;
  margin-left: 50px;
`;

export const CommentsInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5px;
`;

export const CommentsName = styled.Text`
  color: #FFFFFF;
  font-size: 14px;
  font-weight: bold;
`;


export const CommentsBody = styled.Text`
  color: #FFFFFF;
  font-size: 13px;
  
`;
