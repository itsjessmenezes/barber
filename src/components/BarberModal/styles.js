import styled from 'styled-components/native';

export const Modal = styled.Modal`

`;

export const ModalArea = styled.View`
  flex: 1;
  background: rgba(0, 0, 0, 0.5);
  justify-content: flex-end;
`;

export const ModalBody = styled.View`
  background: #83D6E3;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  min-height: 300px;
  padding: 10px 20px 40px 20px;
`;

export const CloseButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
`;

export const ModalItem = styled.View`
  background: #FFFFFF;
  border-radius: 10px;
  margin-bottom: 15px;
  padding: 10px;
`;


export const ModalInfo = styled.View`

  flex-direction: row;
  align-items: center;

`;

export const UserAvatar = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: 20px;
  margin-right: 15px;
`;

export const UserName = styled.Text`
  color: #000000;
  font-size: 18px;
  font-weight: bold;
`;

export const ModalService = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ServiceName = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const ServicePrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const DateInfo = styled.View`
  flex-direction: row;
`;

export const DatePrev = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: flex-end;
`;

export const DateTitle = styled.View`
  width: 140px;
  justify-content: center;
  align-items: center;
`;

export const DateTitleText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #000000;
`;

export const DateNext = styled.TouchableOpacity`
  flex: 1;
  align-items: flex-start;
`;


export const ModalTime = styled.View`

`;

export const FinishButton = styled.TouchableOpacity`
  background: #268596;
  height: 60px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const FinishButtonText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #FFFFFF;
`;

export const DateList = styled.ScrollView``;

export const DateItem = styled.TouchableOpacity`
  width: 45px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
`;

export const DateItemWeekDay = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const DateItemNumber = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const TimeList = styled.ScrollView`

`;

export const TimeItem = styled.TouchableOpacity`
  width: 75px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const TimeItemText = styled.Text`
  font-size: 16px;
`;
