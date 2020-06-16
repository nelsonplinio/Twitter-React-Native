import React from 'react';
import {
  Container,
  DataContainer,
  Date as DateView,
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
  // console.log(new Date(tweet.timestamp));
  return (
    <Container>
      <UserPhoto source={{uri: tweet.from.photoUrl}} />
      <DataContainer>
        <HeaderContainer>
          <UserName>{tweet.from.name}</UserName>
          <TagName>{tweet.from.tagName}</TagName>
          <DateView>
            {(typeof tweet.timestamp === 'string'
              ? new Date(tweet.timestamp)
              : tweet.timestamp
            ).toDateString()}
          </DateView>
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
