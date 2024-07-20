# Node.js Express MongoDB Application

## Overview

This project is a Node.js web application utilizing Express.js for routing, Body-parser for parsing incoming request bodies, and MongoDB for storing contact form submissions. 
The application serves static HTML pages and handles form submissions through a connected MongoDB database.

## Getting Started

<b>1. Install latest version of Node Javascript</b>
  ```shell
  https://nodejs.org/en/download/prebuilt-installer
  ```

<b>2. Create a New Directory for your project</b>      

  `mkdir project_name`                                    
  `cd project_name`

<b>3. Initialize a node project to create a package.json|</b>
  ```shell
  npm init -y
  ```

<b>4. Install MongoDB Driver</b>
  ```shell
  npm install mongodb
  ```

<b>5. Install Dependencies!</b>
  ```shell
  npm install express body-parser ejs
  ```

<b>6. Create app.js|</b>               
                                                                                                                                                                      
  * This is the main application file that sets up the server and handles HTML form.


<b>7. Sample Project Directory</b>      

```
project_name/
├── app.js
├── package.json
├── views/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── public/
│   ├── logo.ico
│   ├── images.jpeg
│   └── video.mp4
└── node_modules/
```                                                                                                                                                            

<b>8. Start your Node.js| server</b>
  ```shell
  node app.js
  ```

## Features

### Express.js

* Initializes an Express application.
* Sets up middleware for parsing URL-encoded data and serving static files.
  
### MongoDB Atlas Connection

Connects to a MongoDB database using the MongoClient from the mongodb package.
Configured with a URI string and specific server API settings.

### View Engine Configuration

* Sets up EJS as the templating engine for rendering HTML files.

### Server Initialization
* Starts the Express server on a specified port.
* Logs a message once the server is running.

## Conclusion
This project demonstrates a Node.js application with integrated MongoDB, capable of serving static pages and handling form submissions.   
The use of Express.js and middleware like Body-parser streamlines the development process, while MongoDB provides a reliable database solution.

## Testing🚀

![Front-end w (Integrated back-end) (deployed locally)](https://raw.githubusercontent.com/EurydiceReverie/SSB_AUTOMATIONS_WD_TASK-05/main/Assets/Back%20end(Final).mp4)

## Contact 💬
Project developed by (Karthik K) - [@EurydiceReverie][contact via telegram](https://t.me/SchadenfreudeKK)

>Inspired by Eurydice
