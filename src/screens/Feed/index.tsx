import React, {useMemo} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import data from 'shared/types/dummyData';

// hook
import {useCurrentNavigation} from 'shared/hooks/useCurrentNavigation';

// features
import FeedList from 'Feed/index';
import {NewPostButton} from 'Feed/components/NewPostButton';

const Feed = () => {
  const {posts} = data;
  const {push} = useCurrentNavigation();
  const createNewPost = () => push('NewPost');

  const RenderList = useMemo(() => <FeedList data={posts} />, [posts]);

  return (
    <SafeAreaView>
      {RenderList}
      <NewPostButton onPress={createNewPost} />
    </SafeAreaView>
  );
};

export default Feed;
