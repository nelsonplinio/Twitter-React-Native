const INITIAL_STATE = [
  {
    id: 6,
    from: {
      name: 'Diego Fernandes',
      tagName: '@dieegosf',
      photoUrl: 'https://avatars2.githubusercontent.com/u/2254731?s=60&v=4',
    },
    message: `
Faaala galera! 💜

O podcast de hoje é sobre Inglês 😍 será que é essencial para elevar a carreira no mundo da programação? 🤔
    
Corre lá pra conferir! 😅🚀💨`,
    timestamp: new Date('2019-11-15'),
    comments: 5,
    retweets: 2,
    likes: 1200,
  },
  {
    id: 1,
    from: {
      name: 'Filipe Deschamps',
      tagName: '@FilipeDeschamps',
      photoUrl:
        'https://pbs.twimg.com/profile_images/1121558321151004672/TQM7EQvn_400x400.png',
    },
    message:
      'Testei um serviço do Google chamado VISION AI e ele coisas que eu não esperava, inclusive nos testes que fiz com as thumbnails do canal. Estamos ferrados, eles sabem e entendem tudo já :)',
    timestamp: new Date('2019/11/11'),
    comments: 5,
    retweets: 2,
    likes: 10,
  },
  {
    id: 2,
    from: {
      name: 'Filipe Deschamps',
      tagName: '@FilipeDeschamps',
      photoUrl:
        'https://pbs.twimg.com/profile_images/1121558321151004672/TQM7EQvn_400x400.png',
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
      name: 'Filipe Deschamps',
      tagName: '@FilipeDeschamps',
      photoUrl:
        'https://pbs.twimg.com/profile_images/1121558321151004672/TQM7EQvn_400x400.png',
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
      name: 'Rocketseat',
      tagName: '@rocketseat',
      photoUrl:
        'https://pbs.twimg.com/profile_images/953595371875422210/0pWsfSSp_200x200.jpg',
    },
    message: `
Faala gaalera! 💜

Seextou com Code/Drops!! 💃🕺 

Quer saber sobre a nova API do React Navigation? 😍

Pega seu café e bora lá! ☕️💨
`,
    timestamp: new Date(),
    comments: 5,
    retweets: 2,
    likes: 1200,
  },
  {
    id: 5,
    from: {
      name: 'Rocketseat',
      tagName: '@rocketseat',
      photoUrl:
        'https://pbs.twimg.com/profile_images/953595371875422210/0pWsfSSp_200x200.jpg',
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
