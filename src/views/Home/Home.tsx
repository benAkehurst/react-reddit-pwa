import React, { useEffect, useState } from 'react'; // we need this to make JSX compile
import axios from 'axios';
import { defaultSubreddits } from '../../data/defaultSubreddits';
import { Posts } from '../../components/Posts/Posts';

export const Home = () => {
  const [postData, setPostData] = useState([]);
  useEffect(() => {
    fetchRawData().then((res) => {
      setPostData(res);
    });
  }, []);

  return (
    <aside>
      <h2>Home</h2>
      {postData && <Posts defaultResults={postData}></Posts>}
    </aside>
  );
};

const fetchRawData = () => {
  return axios.get(defaultSubreddits[0].url).then((data) => {
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
