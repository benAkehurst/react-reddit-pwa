import React, { useState } from 'react'; // we need this to make JSX compile
import axios from 'axios';
import { defaultSubreddits } from '../../data/defaultSubreddits';
import { Posts } from '../../components/Posts/Posts';
import Button from '@material-ui/core/Button';

export const Home = () => {
  const [postData, setPostData] = useState([]);

  const getData = (url: string) => {
    fetchRawData(url).then((res) => setPostData(res));
  };

  return (
    <aside>
      <h1>Home</h1>
      <div>
        <h2>Select Subreddit:</h2>
        {defaultSubreddits.map((subreddit) => {
          return (
            <Button
              variant="contained"
              color="primary"
              style={{ margin: '0.5rem 0.5rem' }}
              key={subreddit.name}
              onClick={() => getData(subreddit.name)}
            >
              {subreddit.name}
            </Button>
          );
        })}
      </div>
      {postData && <Posts defaultResults={postData}></Posts>}
    </aside>
  );
};

const fetchRawData = (url: string) => {
  const baseUrl = 'https://www.reddit.com/r/';
  return axios.get(`${baseUrl}${url}.json`).then((data) => {
    console.log(typeof data.data.data.children);
    return data.data.data.children.map((singlePost: any) => ({
      id: singlePost.data.id,
      subreddit: singlePost.data.subreddit,
      selftext: singlePost.data.selftext,
      title: singlePost.data.title,
      score: singlePost.data.score,
      thumbnail: singlePost.data.thumbnail,
      permalink: singlePost.data.permalink,
      url: singlePost.data.url,
    }));
  });
};
