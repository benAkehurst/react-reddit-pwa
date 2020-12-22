import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

export const Post = (singlePostData: any) => (
  // <div>
  //   <li key={singlePostData.singlePostData.id}>
  //     <a href={singlePostData.singlePostData.url}>
  //       {singlePostData.singlePostData.title}
  //     </a>
  //     <p>{singlePostData.singlePostData.subreddit}</p>
  //   </li>
  // </div>
  <div>
    <List component="nav" aria-label="single-post">
      <ListItem button>
        <ListItemText primary={singlePostData.singlePostData.title} />
      </ListItem>
    </List>
    <Divider />
  </div>
);
