# FLYE-SDK-NODEJS
SDK for accessing Fyle APIs

Nodejs SDK for accessing Fyle APIs. [Fyle](https://www.fylehq.com/) is an expense management system.

## Installation

This project requires [Npm and Nodejs 8+](https://www.npmjs.com/) and [Requests](https://www.npmjs.com/package/request) library (pip install requests).

1. Git clone this project and use it (copy it in your project, etc) or Download the zip form.
2. npm init to set up the package.json file.
3. Install the following packages request, express, body-parser, morgan
4. npm install request body-parser express morgan

To Use the.
1. First you'll need to set up environmental variables in nodemon file.json.
```javascript
    "env"; {
        "REFRESH_TOKEN": "<YOUR TOKEN>",
        "CLIENT_ID": "<YOUR_CLIENT_ID>",
        "CLIENT_SECRET": "<YOUR_CLIENT_SECRET>"
    }
```
2. After that you'll be able to access any of the 18 API classes: *Advances*, *BalanceTransfers*, *Categories*, *CostCenters*, *Employees*, *Expenses*, *Exports*, *HotelBookingCancellations*, *HotelBookings*, *HotelRequests*, *Projects*, *Refunds*, *Reimbursements*, *Reports*, *TransportationBookingCancellations*, *TransportationBookings*, *TransportationRequests*, *TripRequests*.

3. Install [POSTMAN](www.postman.com) to consume all endpoints

4. Enter npm start in commandline to start the application

5. Application by default runs on localhost port 4000


### To Get a list of all Employees (with all available details for Employee)
Copy and Paste this in POSTMAN -> localhost:3000/api/employees and Set the method to GET

## Services
- Advances
- BalanceTransfers
- Categories
- Cost Centres
- Employees
- Trip Requests
- Projects
- TransportationBookingCancellations
- Reimbursements
- HotelBookingCancellations
- Expenses
- Reports
- Refunds

## Table of requests below

|  Method  |  Endpoint  |  Task  |
|  --- |  --- |  ---  |
|  `GET`  |  `/api/employees`  |  `Get Employees`  |
|  `GET`  |  `/api/expenses`  |  `Get Expenses`  |
|  `GET`  |  `/api/refunds`  |  `Get Refunds`  |
|  `GET`  |  `/api/exports`  |  `Get Exports`  |
|  `GET`  |  `/api/costcentres`  |  `Get CostCentres`  |
|  `GET`  |  `/api/projects`  |  `Get Projects`  |
|  `GET`  |  `/api/advances`  |  `Get Advances`  |
|  `GET`  |  `/api/categories`  |  `Get Categories`  |
|  `GET`  |  `/api/hbc`  |  `Get HotelBookCanc`  |
|  `GET`  |  `/api/tbc`  |  `Get TransBookCanc`  |
|  `GET`  |  `/api/hotelbookings`  |  `Get hotelbookings`  |
|  `GET`  |  `/api/reimbursements`  |  `Get Reimbursements`  |
|  `GET`  |  `/api/hotelrequest`  |  `Get HotelRequests`  |

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details


