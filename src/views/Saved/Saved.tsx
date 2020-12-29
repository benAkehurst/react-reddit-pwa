import React, { useState, useEffect } from 'react'; // we need this to make JSX compile
import { Post } from '../../components/Posts/Post/Post';
import '../../components/Posts/Posts.scss';
import {
  getAllLocalStorageItems,
  removeFromLocalStorage,
} from '../../helpers/localStorage';
import { Button } from '@material-ui/core';
import { PostItemType } from '../../types/Post.type';

export const Saved = () => {
  const [savedPostData, setSavedPostData] = useState([]);
  useEffect(() => setSavedPostData(getAllLocalStorageItems), []);
  const deleteFromSavedPosts = (postId: string) => {
    removeFromLocalStorage(postId);
    setSavedPostData(getAllLocalStorageItems);
  };

  return (
    <aside>
      <h2>Saved</h2>
      <hr />
      <section>
        {savedPostData.map((singlePostItem: PostItemType) => {
          return (
            <div key={singlePostItem.id} className={'singlePost'}>
              <Post singlePostData={singlePostItem} />
              <Button
                variant="contained"
                color="primary"
                style={{ margin: '0.5rem 0.5rem' }}
                onClick={() => deleteFromSavedPosts(singlePostItem.id)}
              >
                Delete Saved Post
              </Button>
            </div>
          );
        })}
      </section>
    </aside>
  );
};
