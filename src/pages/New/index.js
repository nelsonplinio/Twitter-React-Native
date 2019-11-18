import React, {useEffect} from 'react';
import {Container, TweetText} from './styles';
import TweetButton from '../../components/TweetButton';
import Colors from '../../theme/colors';
import UserImage from '../../components/UserImage';

export default function New({navigation}) {
  // useEffect(() => {
  //   navigation.setParams({createNewTweet});
  // }, []);

  // function createNewTweet() {
  //   console.log('createNewTweet');
  // }

  return (
    <Container>
      <UserImage
        size={55}
        uri="https://avatars3.githubusercontent.com/u/14140891?s=120&v=4"
      />
      <TweetText
        placeholder="What´s happening?"
        maxLength={140}
        placeholderTextColor="rgba(200, 200, 200, 0.8)"
        autoFocus={true}
        autoCapitalize="sentences"
        multiline
      />
    </Container>
  );
}

export function navigationOptions(props) {
  return {
    mode: 'modal',
    headerStyle: {
      backgroundColor: Colors.background,
    },
    headerTintColor: '#fff',
    headerRight: <TweetButton {...props} />,
  };
}
