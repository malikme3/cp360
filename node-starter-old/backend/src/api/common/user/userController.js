/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

const express = require('express');
const logger = require('../../../utils/logger');

const router = express.Router();

const UserService = require('./userService');

const userService = new UserService();

router.get('/', (req, res) => {
  userService.list(req.query).then(users => {
    logger.info('****************************************************');
    logger.info('\n\n\nUsers = > ', users);
    logger.info('Users = > ', users);
    logger.info('****************************************************');
    res.send(users);
  });
});

router.get('/current', (req, res) => {
  userService.findById(req.user.id).then(user => {
    logger.info('****************************************************');
    logger.info('\n\n\nUsers = > ', user);
    logger.info('Users = > ', user);
    logger.info('****************************************************');
    res.send(user);
  });
});

router.put('/current', (req, res) => {
  userService.editUser(req.body).then(user => {
    logger.info('****************************************************');
    logger.info('\n\n\nUsers = > ', user);
    logger.info('Users = > ', user);
    logger.info('****************************************************');
    res.send(user);
  });
});

router.get('/:id', (req, res) => {
  userService.findById(req.params.id).then(user => {
    logger.info('****************************************************');
    logger.info('\n\n\nUsers = > ', user);
    logger.info('Users = > ', user);
    logger.info('****************************************************');
    res.send(user);
  });
});
router.delete('/:id', (req, res) => {
  userService.deleteUser(req.params.id).then(() => res.send({ id: req.params.id }));
});

router.post('/', (req, res) => {
  userService.addUser(req.body).then(user => {
    logger.info('****************************************************');
    logger.info('\n\n\nUsers = > ', user);
    logger.info('Users = > ', user);
    logger.info('****************************************************');
    res.send(user);
  });
});

router.put('/:id', (req, res) => {
  userService.editUser(req.body).then(user => res.send(user));
});

router.get('/:userId/photo', (req, res) => {
  userService.getPhoto(req.params.userId).then(photo => {
    res.set('Content-Type', 'image/png');
    res.send(photo);
  });
});

module.exports = router;
