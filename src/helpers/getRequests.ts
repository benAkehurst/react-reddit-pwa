import axios from 'axios';
import { defaultSubreddits } from '../data/defaultSubreddits';
import { PostItemType } from '../types/Post.type';

const baseUrl = 'https://www.reddit.com/r/';

export const fetchSubredditPosts = (url: string) => {
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


export const fetchTopPosts = new Promise((resolve, reject) => {
  let megaArray: any = [];
  defaultSubreddits.forEach((subredditName: any) => {
    return fetchSubredditPosts(subredditName.name).then(data => {
      data.forEach((element: PostItemType) => {
        if (element.score > 100) {
          megaArray.push(element);
        }
      });
    });
  });
  resolve(megaArray);
});
