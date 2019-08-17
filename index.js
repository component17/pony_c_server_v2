const express = require('express');
const app = require('express')();
const server = require('http').Server(app);
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(express.static(__dirname + '/public'));

app.use(express.static(__dirname + '/public'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

server.listen(8080, () => {
    console.log('Start server 8080 port');
});

// module.exports = {
//     apps: [
//         {
//             name: "controller_app",
//             script: "./pony_c_server_v2/index.js",
//             env: {
//                 NODE_ENV: "development",
//             },
//             env_production: {
//                 NODE_ENV: "production",
//             }
//         },
//         {
//             name: "main_server",
//             script: "./pony_server_v2/index.js",
//             env: {
//                 NODE_ENV: "development",
//             },
//             env_production: {
//                 NODE_ENV: "production",
//             }
//         }
//     ]
// }
