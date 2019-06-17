const express = require("express");
const router = express.Router();
const axios = require("axios");
const urls = require("../utils/urls");

router.get("/search/:q", (req, res, next) => {
  const options = {
    key: urls.key,
    q: req.params.q,
    maxResults: 20,
    part: "snippet",
    videoCategoryId: 10,
    chart: "mostpopular",
    type: "video"
  };

  axios
    .get(urls.baseUrl + "/search", { params: options })
    .then(resp => {
      res.json(resp.data);
    })
    .catch(err => {
      console.log(err);
      next();
    });
});

module.exports = router;
