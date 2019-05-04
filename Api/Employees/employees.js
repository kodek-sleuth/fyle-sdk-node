const express = require('express');

const employees = express.Router()

const request = require('request');

const api_headers = {Authorization: 'Bearer Token'};

const apiData = {
  grant_type: 'refresh_token',
  refresh_token: process.env.REFRESH_TOKEN,
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET
}

employees.post('/token', (req, res, next) => {
  request({
      url: 'https://staging.fyle.in/api/oauth/token',
      body: apiData,
      headers: {'content-type' : 'application/json'}
    }).pipe(res)
})

employees.get('/employees', (req, res, next) => {
    request({
        url: 'https://staging.fyle.in/api/tpa/v1/employees'
      }).pipe(res)
})

module.exports = employees


