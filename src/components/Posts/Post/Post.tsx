import React from 'react';

export const Post = (singlePostData: any) => (
  <div>
    <li key={singlePostData.singlePostData.id}>
      <a href={singlePostData.singlePostData.url}>
        {singlePostData.singlePostData.title}
      </a>
      <p>{singlePostData.singlePostData.subreddit}</p>
    </li>
  </div>
);
