const express = require('express');
const axios = require('axios');
const mongoose = require('mongoose');
const route = require('./routes/getinfo')
const cors = require('cors')
require("dotenv").config();
const app = express();
const PORT = process.env.PORT|| 5000;
app.use(cors());
app.use(express.json());

// app.use("/api", route)

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});



const db = mongoose.connection;

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define a schema for the MongoDB documents
const wazirxDataSchema = new mongoose.Schema({
  name: String,
  last: String,
  buy: String,
  sell: String,
  volume: String,
  base_unit: String,
});

const WazirxData = mongoose.model('WazirxData', wazirxDataSchema);

// Fetch data from the WazirX API
app.get('/fetchData', async (req, res) => {
  try {
    const response = await axios.get('https://api.wazirx.com/api/v2/tickers');

    if (response) {
      const top10Data = Object.values(response.data).slice(0, 10); // Extract the top 10 results
 
      await WazirxData.deleteMany({});
      for (const item of top10Data) {
        const wazirxData = new WazirxData({
          name: item.name,
          last: item.last,
          buy: item.buy,
          sell: item.sell,
          volume: item.volume,
          base_unit: item.baseUnit,
        });
        
        await wazirxData.save();
      }

      res.json({ message: 'Data stored in MongoDB.' });
    } else {
      res.status(500).json({ error: 'Failed to fetch data from the API.' });
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'An error occurred while fetching data.' });
  }
});


app.get('/getData', async (req, res) => {
    try {
        console.log("called")
        const response = await axios.get('https://api.wazirx.com/api/v2/tickers');

        if (response) {
          const top10Data = Object.values(response.data).slice(0, 10); // Extract the top 10 results
     
          await WazirxData.deleteMany({});
          for (const item of top10Data) {
            const wazirxData = new WazirxData({
              name: item.name,
              last: item.last,
              buy: item.buy,
              sell: item.sell,
              volume: item.volume,
              base_unit: item.baseUnit,
            });
            
            await wazirxData.save();
          }
    
          
        } else {
          console.log({ error: 'Failed to fetch data from the API.' });
        }

      const data = await WazirxData.find({}); 
      res.json(data);

    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'An error occurred while fetching data.' });
    }
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
