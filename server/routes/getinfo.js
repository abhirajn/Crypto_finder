const mongoose = require("mongoose");
const express = require('express');
const { WazirxData } = require('../index');

const app = express();

app.get('/getData', async (req, res) => {
    try {
      const data = await WazirxData.find({}); 
      res.json(data);

    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'An error occurred while fetching data.' });
    }
  });
//   module.exports = router;