import axios from 'axios';

export const fetchSubredditPosts = (url: string) => {
  const baseUrl = 'https://www.reddit.com/r/';
  return axios.get(`${baseUrl}${url}.json`).then((data) => {
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
