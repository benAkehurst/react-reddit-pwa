import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import './Post.scss';

export const Post = (singlePostData: any) => {
  return (
    <div className={'singlePostWrapper'}>
      <List component="nav" aria-label="single-post">
        <ListItem
          button
          onClick={() => showPostItem(singlePostData.singlePostData.title)}
        >
          <ListItemText primary={singlePostData.singlePostData.title} />
        </ListItem>
      </List>
      {singlePostData.singlePostData.url
        .toLowerCase()
        .match(/\.(jpg|png|gif)/g) ? (
        <img
          className={'singlePostImage'}
          src={singlePostData.singlePostData.url}
          alt={'post'}
        />
      ) : null}
      <Divider />
    </div>
  );
};

const showPostItem = (postTitle: string) => {};
