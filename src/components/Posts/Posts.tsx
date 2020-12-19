import React from 'react'; // we need this to make JSX compile
import { PostItemType } from '../../types/Post.type';

export const Posts = ({ defaultResults }: any) => (
  <div>
    {defaultResults.map((d: PostItemType) => {
      return (
        <li key={d.id}>
          <a href={d.url}>{d.title}</a>
        </li>
      );
    })}
  </div>
);
