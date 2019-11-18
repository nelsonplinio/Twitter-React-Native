import styled from 'styled-components/native';

import Colors from './../../theme/colors';

export const Container = styled.View`
  flex: 1;
  background: ${Colors.background};
  flex-direction: row;
  align-items: flex-start;
  padding: 8px;
`;

export const TweetText = styled.TextInput`
  color: #f1f1f1;
  flex: 10;
  margin: 8px 16px;
  font-size: 18px;

  flex-wrap: wrap;
`;
