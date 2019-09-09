/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

const mongoClient = require('mongodb').MongoClient;
const config = require('config');
const logger = require('../utils/logger');

let dbClient = null;

module.exports = function getMongoDBClient() {
  if (dbClient) {
    return dbClient;
  }
  logger.info('Zulfi Connecting to MongoDB client...');

  const { url, name } = config.get('db');
  const ur = 'mongodb+srv://rrcp:asadmalik@cp360-6pik6.mongodb.net/cp360?retryWrites=true&w=majority';
  // const client = new MongoClient(uri, { useNewUrlParser: true });
  // client.connect(err => {
  //   const collection = client.db('test').collection('devices');
  //   // perform actions on the collection object
  //   client.close();
  // });
  dbClient = mongoClient
    .connect(ur, { useNewUrlParser: true })
    .then(client => {
      logger.info('MongoDB client has been successfully created');
      return client.db('cp360');
    })
    .catch(err => {
      logger.error(`Error occurred while connecting to mongodb: ${err}`);
    });

  return dbClient;
};
