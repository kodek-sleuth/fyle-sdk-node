
// Library that enables us to make the JSON SPEC file
const swaggerDoc = require('swagger-jsdoc');

// Creating swag app from express
const express = require('express');

const swag = express.Router();

// Describing The Introductory Part of The API Documentation
const swaggerDefinition = {
    info: {
      title: 'Fyle',
      version: '1.0.0',
      description: 'Fyle API ENDPOINTS'
    },
    host: 'localhost:3000',
    schemes: ['http'],
    basePath: '/',
    securityDefinitions: {
      bearerAuth: {
        type: 'apiKey',
        name: 'authorization',
        scheme: 'bearer',
        in: 'header',
      },
    },
  };

const options = {
    swaggerDefinition,
    apis: ['./Api/Auth/*.js', './Api/Loans/*.js', './Api/Profiles/*.js', './Api/Verifications/*.js']
};

exports.swaggerSpec = swaggerDoc(options);