import React from 'react'; // we need this to make JSX compile
import Button from '@material-ui/core/Button';
import { PostItemType } from '../../types/Post.type';
import { Post } from './Post/Post';
import './Posts.scss';

export const Posts = ({ defaultResults, chosenSubreddit }: any) => (
  <div>
    {chosenSubreddit && <h3>Current Subreddit: {chosenSubreddit}</h3>}
    {defaultResults.map((singlePostItem: PostItemType) => {
      return (
        <div className={'singlePost'} key={singlePostItem.id}>
          <Post singlePostData={singlePostItem} />
          <Button
            variant="contained"
            color="primary"
            style={{ margin: '0.5rem 0.5rem' }}
            onClick={() => savePost()}
          >
            Save Post
          </Button>
        </div>
      );
    })}
  </div>
);

const savePost = () => {
  console.log('save post clicked');
};
