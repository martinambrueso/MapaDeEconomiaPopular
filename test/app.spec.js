/* eslint-disable global-require */
'use strict';

const fs = require('fs');
const path = require('path');
const chaiHttp = require('chai-http');
const chai = require('chai');

chai.use(chaiHttp);

// including all test files
const normalizedPath = path.join(__dirname, '.');

const requireAllTestFiles = pathToSearch => {
  fs.readdirSync(pathToSearch).forEach(file => {
    if (fs.lstatSync(`${pathToSearch}/${file}`).isDirectory()) requireAllTestFiles(`${pathToSearch}/${file}`);
    else require(`${pathToSearch}/${file}`);
  });
};

requireAllTestFiles(normalizedPath);
