import React from 'react';
import {Container, List, NewFabButton, FabButtonIcon} from './styles';

import Tweet from './../../components/Tweet';

export default function Home({navigation}) {
  const tweets = [
    {
      id: 1,
      from: {
        name: 'Nelson PLínio',
        tagName: '@nelson_plinio',
        photoUrl: 'https://avatars3.githubusercontent.com/u/14140891?s=120&v=4',
      },
      message: 'Replica do tweet heheh',
      timestamp: new Date(),
      comments: 5,
      retweets: 2,
      likes: 1200,
    },
    {
      id: 2,
      from: {
        name: 'Nelson PLínio',
        tagName: '@nelson_plinio',
        photoUrl: 'https://avatars3.githubusercontent.com/u/14140891?s=120&v=4',
      },
      message: 'Replica do tweet heheh',
      timestamp: new Date(),
      comments: 5,
      retweets: 2,
      likes: 1200,
    },
    {
      id: 3,
      from: {
        name: 'Nelson PLínio',
        tagName: '@nelson_plinio',
        photoUrl: 'https://avatars3.githubusercontent.com/u/14140891?s=120&v=4',
      },
      message: 'Replica do tweet heheh',
      timestamp: new Date(),
      comments: 5,
      retweets: 2,
      likes: 1200,
    },
    {
      id: 4,
      from: {
        name: 'Nelson PLínio',
        tagName: '@nelson_plinio',
        photoUrl: 'https://avatars3.githubusercontent.com/u/14140891?s=120&v=4',
      },
      message: 'Replica do tweet heheh',
      timestamp: new Date(),
      comments: 5,
      retweets: 2,
      likes: 1200,
    },
    {
      id: 5,
      from: {
        name: 'Nelson PLínio',
        tagName: '@nelson_plinio',
        photoUrl: 'https://avatars3.githubusercontent.com/u/14140891?s=120&v=4',
      },
      message: 'Replica do tweet heheh',
      timestamp: new Date(),
      comments: 5,
      retweets: 2,
      likes: 1200,
    },
    {
      id: 6,
      from: {
        name: 'Nelson PLínio',
        tagName: '@nelson_plinio',
        photoUrl: 'https://avatars3.githubusercontent.com/u/14140891?s=120&v=4',
      },
      message: 'Replica do tweet heheh',
      timestamp: new Date(),
      comments: 5,
      retweets: 2,
      likes: 1200,
    },
    {
      id: 7,
      from: {
        name: 'Nelson PLínio',
        tagName: '@nelson_plinio',
        photoUrl: 'https://avatars3.githubusercontent.com/u/14140891?s=120&v=4',
      },
      message: 'Replica do tweet heheh',
      timestamp: new Date(),
      comments: 5,
      retweets: 2,
      likes: 1200,
    },
    {
      id: 8,
      from: {
        name: 'Nelson PLínio',
        tagName: '@nelson_plinio',
        photoUrl: 'https://avatars3.githubusercontent.com/u/14140891?s=120&v=4',
      },
      message: 'Replica do tweet heheh',
      timestamp: new Date(),
      comments: 5,
      retweets: 2,
      likes: 1200,
    },
    {
      id: 9,
      from: {
        name: 'Nelson PLínio',
        tagName: '@nelson_plinio',
        photoUrl: 'https://avatars3.githubusercontent.com/u/14140891?s=120&v=4',
      },
      message: 'Replica do tweet heheh',
      timestamp: new Date(),
      comments: 5,
      retweets: 2,
      likes: 1200,
    },
    {
      id: 10,
      from: {
        name: 'Nelson PLínio',
        tagName: '@nelson_plinio',
        photoUrl: 'https://avatars3.githubusercontent.com/u/14140891?s=120&v=4',
      },
      message: 'Replica do tweet heheh',
      timestamp: new Date(),
      comments: 5,
      retweets: 2,
      likes: 1200,
    },
  ];

  function openNewTweet() {
    navigation.navigate('New');
  }

  return (
    <Container>
      <List
        data={tweets}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Tweet tweet={item} />}
      />

      <NewFabButton onPress={() => openNewTweet()}>
        <FabButtonIcon name="edit" />
      </NewFabButton>
    </Container>
  );
}
