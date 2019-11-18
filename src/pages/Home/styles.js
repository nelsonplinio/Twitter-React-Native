import styled from 'styled-components/native';
import {FlatList} from 'react-native';
import Colors from '../../theme/colors';
import Icons from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  flex: 1;
  background: ${Colors.background};
`;

export const List = styled(FlatList)`
  flex: 1;
  padding: 4px 4px 75px 4px;
  flex-grow: 1;
`;

export const NewFabButton = styled.TouchableOpacity`
  height: 55px;
  width: 55px;
  background: ${Colors.assets};
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  bottom: 16px;
  right: 16px;
  position: absolute;
`;

export const FabButtonIcon = styled(Icons)`
  color: #fff;
  font-size: 24px;
`;
