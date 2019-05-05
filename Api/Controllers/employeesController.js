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
        body:  JSON.stringify(apiData),
        headers: {
            'Accept':'application/json, text/plain, */*',
            'Content-type':'application/json'
        }
    };

    let callback = (error, response, body) => {
        if (!error && response.statusCode == 200)
        {
            let info = body;
            console.log(body);
        }
    };

    request.post(options, callback).pipe(res);
};

exports.getEmployees = (req, res, next) => {
    let options = {
        url: 'https://staging.fyle.in/api/tpa/v1/employees'
    };

    let callback = (error, response, body) => {
        if (!error && response.statusCode == 200)
        {
            console.log(body);
        }

        else
        {
            console.log(error);
        }   
    };

    request.get(options, callback).pipe(res);
};
