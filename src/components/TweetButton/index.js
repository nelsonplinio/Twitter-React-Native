import React from 'react';
import {Container, Text} from './styles';

export default function TweetButton({navigation}) {
  const createNewTweet = navigation.getParam('createNewTweet', () => {});
  const disabled = navigation.getParam('disabled', true);
  return (
    <Container disabled={disabled} onPress={() => createNewTweet()}>
      <Text>Tweet</Text>
    </Container>
  );
}
