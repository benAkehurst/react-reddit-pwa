import React, { useState } from 'react'; // we need this to make JSX compile
import { defaultSubreddits } from '../../data/defaultSubreddits';
import { Posts } from '../../components/Posts/Posts';
import { fetchSubredditPosts } from '../../helpers/getRequests';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';

export const Home = () => {
  const [postData, setPostData] = useState([]);
  const [chosenSubreddit, setChosenSubreddit] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const getData = (url: string) => {
    setPostData([]);
    fetchSubredditPosts(url).then((res) => {
      setIsLoading(false);
      setPostData(res);
    });
  };

  return (
    <main>
      {isLoading && <LinearProgress color="secondary" />}
      <h1>Home</h1>
      <section>
        <h2>Select Subreddit:</h2>
        {defaultSubreddits.map((subreddit) => {
          return (
            <Button
              variant="contained"
              color="primary"
              style={{ margin: '0.5rem 0.5rem' }}
              key={subreddit.name}
              onClick={() => {
                setIsLoading(true);
                getData(subreddit.name);
                setChosenSubreddit(subreddit.name);
              }}
            >
              {subreddit.name}
            </Button>
          );
        })}
      </section>
      <section>
        {postData && (
          <Posts
            defaultResults={postData}
            chosenSubreddit={chosenSubreddit}
          ></Posts>
        )}
      </section>
    </main>
  );
};
