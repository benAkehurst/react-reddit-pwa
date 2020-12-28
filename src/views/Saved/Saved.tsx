import React, { useState, useEffect } from 'react'; // we need this to make JSX compile
import {
  getAllLocalStorageItems,
  removeFromLocalStorage,
} from '../../helpers/localStorage';
import { PostItemType } from '../../types/Post.type';

export const Saved = () => {
  const [savedPostData, setSavedPostData] = useState([]);
  useEffect(() => setSavedPostData(getAllLocalStorageItems), []);
  const deleteFromSavedPosts = (postId: string) => {
    removeFromLocalStorage(postId);
    setSavedPostData(getAllLocalStorageItems);
  };
  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };
  return (
    <aside>
      <h2>Saved</h2>
      {savedPostData.map((item: PostItemType) => {
        return (
          <div key={item.id}>
            <span onClick={() => openInNewTab(item.url)}>{item.title}</span>
            {item.url.toLowerCase().match(/\.(jpg|png|gif)/g) ? (
              <span>Image Post</span>
            ) : null}
            <button
              onClick={() => {
                deleteFromSavedPosts(item.id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </aside>
  );
};
