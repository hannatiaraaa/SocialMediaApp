import NewPost from 'screens/Feed/NewPost';
import Comment from 'screens/Feed/Comment';

export const FeedRoutes = [
  {
    name: 'NewPost',
    component: NewPost,
    options: {headerTransparent: true, title: ''},
  },
  {
    name: 'Comment',
    component: Comment,
    options: {title: 'Comments'},
  },
];
