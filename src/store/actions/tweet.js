export function newTweet(tweet) {
  return {
    type: 'NEW_TWEET',
    tweet,
  };
}
