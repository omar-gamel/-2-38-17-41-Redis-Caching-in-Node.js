import express from 'express';
import fetch from 'node-fetch';
import { createClient } from 'redis';

const PORT = process.env.PORT || 5000;
const REDIS_PORT = process.env.REDIS_PORT || 6379;

const client = createClient({
  url: `redis://localhost:${REDIS_PORT}`
});

client.on('error', err => console.log('Redis Client Error', err));

client.connect();

const app = express();

const setResponse = (username, repos) => {
  return `<h2>${username} has ${repos} Github repos</h2>`;
};

const getRepos = async (req, res, next) => {
  try {
    console.log('Fetching Data...');

    const { username } = req.params;

    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();

    const repos = data.public_repos;

    // Set data to Redis with expiration time
    await client.set(username, repos, {
      EX: 3600 // Set the expiration time (in seconds)
    });

    res.send(setResponse(username, repos));
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

const cache = async (req, res, next) => {
  const { username } = req.params;

  try {
    const data = await client.get(username);
    if (!data) {
      res.send(setResponse(username, data));
    } else {
      next();
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

app.get('/repos/:username', cache, getRepos);

app.listen(PORT, () => {
  console.log(`App Listening On Port ${PORT}`);
});
