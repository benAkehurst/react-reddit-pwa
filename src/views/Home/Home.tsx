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
      <h2>Home</h2>
      <hr />
      <div>
        <h4>Select Subreddit:</h4>
        {defaultSubreddits.map((subreddit) => {
          return (
            <Button
              variant="contained"
              color="primary"
              style={{ margin: '0 0.5rem' }}
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
    return data.data.data.children.map((d: any) => ({
      id: d.data.id,
      subreddit: d.data.subreddit,
      selftext: d.data.selftext,
      title: d.data.title,
      score: d.data.score,
      thumbnail: d.data.thumbnail,
      permalink: d.data.permalink,
      url: d.data.url,
    }));
  });
};
