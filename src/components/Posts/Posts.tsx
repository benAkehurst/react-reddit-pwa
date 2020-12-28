import React, { useState } from 'react'; // we need this to make JSX compile
import Button from '@material-ui/core/Button';
import { PostItemType } from '../../types/Post.type';
import { Post } from './Post/Post';
import './Posts.scss';

export const Posts = ({ defaultResults, chosenSubreddit }: any) => {
  const [selectedUrl, setSelectedUrl] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const openPostPreview = (url: string) => {
    console.log('url: ', url);
  };

  const savePost = () => {
    console.log('save post clicked');
  };

  return (
    <div>
      {chosenSubreddit && <h3>Current Subreddit: {chosenSubreddit}</h3>}
      {defaultResults.map((singlePostItem: PostItemType) => {
        return (
          <div key={singlePostItem.id} className={'singlePost'}>
            <div
              onClick={() => {
                openPostPreview(singlePostItem.url);
                setSelectedUrl(singlePostItem.url);
              }}
            >
              <Post singlePostData={singlePostItem} />
            </div>
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
};
