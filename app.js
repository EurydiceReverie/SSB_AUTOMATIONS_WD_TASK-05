const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient, ServerApiVersion } = require('mongodb');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

const uri = "your String URI";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.static('views'));

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

async function startServer() {
  try {
    await client.connect();
    const db = client.db('write db name here');
    const collection = db.collection('write collection name here');

    app.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, 'views', 'index.html'));
    });

    app.get('/blog', (req, res) => {
      res.sendFile(path.join(__dirname, 'views', 'blog.html'));
    });
  
    app.get('/contact', (req, res) => {
      res.sendFile(path.join(__dirname, 'views', 'contact.html'));
    });

    app.get('/posts', (req, res) => {
      res.sendFile(path.join(__dirname, 'views', 'posts.html'));
    });

    app.get('/Proj', (req, res) => {
      res.sendFile(path.join(__dirname, 'views', 'Proj.html'));
    });

    app.get('/aboutme', (req, res) => {
      res.sendFile(path.join(__dirname, 'views', 'check.html'));
    });

    app.post('/contact', async (req, res) => {
      try {
        const { name, email, message } = req.body;
        console.log('Form data received:', { name, email, message });
        
        const existingEntry = await collection.findOne({ $or: [{ name }, { email }] });

        if (existingEntry) {
          res.send('An entry with the same name or email already exists.');
        } else {
          await collection.insertOne({ name, email, message });
          res.send('Message successfully sent! Thanks for contacting me.');
        }
      } catch (error) {
        console.error('Error saving message:', error);
        res.status(500).send('Error saving message. Please try again later.');
      }
    });

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });

  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
  }
}

startServer();