import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './Post.scss';

export const Post = (singlePostData: any) => {
  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };
  return (
    <div className={'singlePostWrapper'}>
      <List component="nav" aria-label="single-post">
        <ListItem
          button
          onClick={() => openInNewTab(singlePostData.singlePostData.url)}
        >
          <ListItemText primary={singlePostData.singlePostData.title} />
          <ListItemText primary={singlePostData.singlePostData.subreddit} />
        </ListItem>
      </List>
      {singlePostData.singlePostData.url
        .toLowerCase()
        .match(/\.(jpg|png|gif)/g) ? (
        <LazyLoadImage
          className={'singlePostImage'}
          effect="blur"
          src={singlePostData.singlePostData.url}
          alt={'post'}
        />
      ) : null}
      <Divider />
    </div>
  );
};
