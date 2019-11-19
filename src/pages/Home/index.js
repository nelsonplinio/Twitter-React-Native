import React from 'react';
import {Container, List, NewFabButton, FabButtonIcon} from './styles';
import {connect} from 'react-redux';

import Tweet from './../../components/Tweet';

function Home({navigation, tweets}) {
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

const mapStateToProps = ({tweets}) => ({
  tweets,
});

export default connect(mapStateToProps)(Home);
