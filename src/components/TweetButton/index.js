import React from 'react';
import {Container, Text} from './styles';

export default function TweetButton({navigation}) {
  const createNewTweet = navigation.getParam('createNewTweet', () => {});
  return (
    <Container onPress={() => createNewTweet()}>
      <Text>Tweet</Text>
    </Container>
  );
}
