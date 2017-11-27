const fs = require('fs');
const finScore = require('./bball.js');

let data = finScore.final(loss);
fs.writeFile(`monstars.txt`, data)