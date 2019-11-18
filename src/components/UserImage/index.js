import React from 'react';
import {Container, Image} from './styles';

export default function UserImage({uri, size = 40}) {
  return (
    <Container>
      <Image size={size} source={{uri: uri}} />
    </Container>
  );
}
