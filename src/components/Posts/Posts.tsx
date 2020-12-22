import React from 'react'; // we need this to make JSX compile
import { PostItemType } from '../../types/Post.type';
import { Post } from './Post/Post';

export const Posts = ({ defaultResults, chosenSubreddit }: any) => (
  <div>
    {chosenSubreddit && <h3>Current Subreddit: {chosenSubreddit}</h3>}
    {defaultResults.map((singlePostItem: PostItemType) => {
      return <Post key={singlePostItem.id} singlePostData={singlePostItem} />;
    })}
  </div>
);
