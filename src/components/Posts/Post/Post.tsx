import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

export const Post = (props: any) => (
  <div>
    <List component="nav" aria-label="single-post">
      <ListItem
        button
        onClick={() => showPostItem(props.singlePostData.singlePostData.title)}
      >
        <ListItemText primary={props.singlePostData.singlePostData.title} />
      </ListItem>
    </List>
    <Divider />
  </div>
);

const showPostItem = (postTitle: string) => {};
