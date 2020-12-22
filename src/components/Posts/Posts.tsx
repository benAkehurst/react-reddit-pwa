import React from 'react'; // we need this to make JSX compile
import { PostItemType } from '../../types/Post.type';
import { Post } from './Post/Post';

export const Posts = ({ defaultResults }: any) => (
  <div>
    {defaultResults.map((singlePostItem: PostItemType) => {
      return <Post key={singlePostItem.id} singlePostData={singlePostItem} />;
    })}
  </div>
);
