const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const swaggerUI = require('swagger-ui-express');
const swagger = require('../Api/Settings/swagger');
const employees = require('../Api/Employees/employees');

// Enable API to receive urlencoded data as well as json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

// To tell express that uploads is a static folder 
app.use(express.static('uploads'));

app.get('/swagger.json', (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swagger.swaggerSpec);
});

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swagger.swaggerSpec));

app.use('/api', employees);


// Error Handling Where we create a new error object that gets sent on after error display Message Status
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;

    // Sending The error object to be sent and displayed back to User/Console 
    next(error);
});

app.use((error, req, res, next) => {
    // Displaying The Error Message To User/Console
    res.status(error.status || 500);
    res.json({
       
        Error: error.message
    });
});

module.exports = app;