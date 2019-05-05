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

exports.getAuthToken = (req, res, next) => {
    let options = {
        url: 'https://staging.fyle.in/api/oauth/token',
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: apiData
    };

    let callback = (error, response, body) => {
        if (!error && response.statusCode == 200)
        {
            let info = JSON.parse(body)
            console.log(body)
        }
    };

    request.post(options, callback);
};

exports.getEmployees = (req, res, next) => {
    let options = {
        url: 'https://staging.fyle.in/api/tpa/v1/employees',
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: apiData
    };

    let callback = (error, response, body) => {
        if (!error && response.statusCode == 200)
        {
            let info = JS0N.parse(body)
            console.log(body)
        }
    };

    request.get(options, callback);
};
