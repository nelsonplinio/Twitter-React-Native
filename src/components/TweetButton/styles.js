import styled from 'styled-components/native';
import Colors from '../../theme/colors';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export const Container = styled.TouchableOpacity`
  background: ${Colors.assets};
  height: 34px;
  opacity: ${({disabled}) => (disabled ? 0.5 : 1)};
  border-radius: 22px;
  width: ${width * 0.2}px;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
`;

export const Text = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
