const INITIAL_STATE = [
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
    likes: 10,
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

export default function tweets(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'NEW_TWEET':
      return [action.tweet, ...state];
    default:
      return state;
  }
}
