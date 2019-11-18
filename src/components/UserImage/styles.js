import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  margin-left: 12px;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.Image`
  height: ${({size}) => size}px;
  width: ${({size}) => size}px;
  border-radius: ${({size}) => size / 2}px;
`;
