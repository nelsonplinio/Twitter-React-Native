import styled from 'styled-components/native';
import Icons from 'react-native-vector-icons/FontAwesome5';
import {Dimensions} from 'react-native';

import Colors from '../../theme/colors';

const {width} = Dimensions.get('window');

export const Container = styled.View`
  padding: 8px;
  flex-flow: row;
  align-items: flex-start;
  justify-content: flex-start;

  min-height: 100px;
  margin-bottom: 2px;

  border-bottom-color: rgba(100, 100, 100, 0.3);
  border-bottom-width: 1px;
`;

export const UserPhoto = styled.Image`
  height: ${width * 0.12}px;
  width: ${width * 0.12}px;
  border-radius: ${(width * 0.12) / 2}px;
`;

export const DataContainer = styled.View`
  margin-left: 12px;
  flex: 1;
`;

export const HeaderContainer = styled.View`
  flex-flow: row;
  align-items: center;
  padding-bottom: 8px;
  justify-content: flex-start;
  flex: 1;
`;

export const UserName = styled.Text`
  font-size: 16px;
  color: ${Colors.primaryTextColor};
  font-weight: bold;
  margin-right: 4px;
`;

export const TagName = styled.Text`
  font-size: 12px;
  color: ${Colors.secondaryColor};
  margin-right: 4px;
`;

export const Date = styled(TagName)``;

export const TweetText = styled(UserName)`
  font-weight: normal;
  line-height: 22px;
  margin: 2px 0;
`;

export const FooterContainer = styled.View`
  flex-direction: row;
  padding: 4px 0;
  align-items: center;
  justify-content: space-around;
`;

export const CounterButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* height: ${width * 0.05}px; */
  flex: 1;
`;

export const CounterIcon = styled(Icons)`
  color: ${Colors.secondaryColor};
  padding: 8px 12px;
  font-size: 16px;
`;

export const CounterLabel = styled.Text`
  color: ${Colors.secondaryColor};
`;
