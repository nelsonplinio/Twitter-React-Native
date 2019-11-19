import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import TweetButton from '../../components/TweetButton';
import UserImage from '../../components/UserImage';
import * as TweetActions from '../../store/actions/tweet';
import Colors from '../../theme/colors';
import {Container, TweetText} from './styles';

function New({navigation, user, newTweet, tweets}) {
  const [tweetMsg, setTweetMsg] = useState('');

  useEffect(() => {
    navigation.setParams({createNewTweet, disabled: tweetMsg.length === 0});
  }, [tweetMsg]);

  function createNewTweet() {
    const tweet = {
      from: user,
      id: tweets.length + 1,

      message: tweetMsg,
      timestamp: new Date(),
      comments: 0,
      retweets: 0,
      likes: 0,
    };

    newTweet(tweet);
    navigation.goBack();
  }

  return (
    <Container>
      <UserImage size={55} uri={user.photoUrl} />
      <TweetText
        placeholder="What´s happening?"
        maxLength={140}
        placeholderTextColor="rgba(200, 200, 200, 0.8)"
        autoFocus={true}
        autoCapitalize="sentences"
        multiline
        value={tweetMsg}
        onChangeText={setTweetMsg}
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

const mapStateToProps = ({user, tweets}) => ({
  user,
  tweets,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(TweetActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(New);
