const express = require('express')
const permissionsRouter = express.Router();

const {getAllPermessions} = require('../controllers/permissions')

permissionsRouter.get('/permissions', getAllPermessions);

module.exports = {permissionsRouter}