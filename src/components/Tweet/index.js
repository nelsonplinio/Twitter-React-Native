import React from 'react';
import {
  Container,
  DataContainer,
  Date,
  HeaderContainer,
  TagName,
  TweetText,
  UserName,
  UserPhoto,
  FooterContainer,
  CounterButton,
  CounterIcon,
  CounterLabel,
} from './styles';

export default function Tweet({tweet}) {
  return (
    <Container>
      <UserPhoto source={{uri: tweet.from.photoUrl}} />
      <DataContainer>
        <HeaderContainer>
          <UserName>{tweet.from.name}</UserName>
          <TagName>{tweet.from.tagName}</TagName>
          <Date>{tweet.timestamp.toDateString()}</Date>
        </HeaderContainer>

        <TweetText>{tweet.message}</TweetText>

        <FooterContainer>
          <CounterButton>
            <CounterIcon name="comment" />
            <CounterLabel>{tweet.comments}</CounterLabel>
          </CounterButton>
          <CounterButton>
            <CounterIcon name="retweet" />
            <CounterLabel>{tweet.retweets}</CounterLabel>
          </CounterButton>
          <CounterButton>
            <CounterIcon name="heart" />
            <CounterLabel>{tweet.likes}</CounterLabel>
          </CounterButton>

          <CounterButton>
            <CounterIcon name="share" />
          </CounterButton>
        </FooterContainer>
      </DataContainer>
    </Container>
  );
}
