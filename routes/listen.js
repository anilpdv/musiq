const express = require('express');
const axios = require('axios');
const ytdl = require('youtube-dl');
const fs = require('fs');

const router = express.Router();

router.get('/listen/:id', (req, res) => {
  const video = ytdl('https://www.youtube.com/watch?v=' + req.params.id, [
    '--format=bestaudio',
  ]);
  res.setHeader('Content-Type', 'audio/mpeg');

  video.on('error', err => console.log(err));
  video.pipe(res);
});

module.exports = router;
