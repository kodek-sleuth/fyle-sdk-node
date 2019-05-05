const express = require('express');

const employees = express.Router();

const request = require('request');

const employeesController = require('../Controllers/employeesController');


// Getting Auth Token
employees.post('/token', employeesController.getAuthToken);

//Getting All employees
employees.get('/employees', employeesController.getEmployees)

module.exports = employees


