# Meeting Cost calculator

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Many companies spend way too much time on meetings and ofocurse this costs them a lot of money as well. 
In this application you can enter your company employees and also create multiple meetings with those
employees and see overall meeting costs. 

## Running it on your machine

Clone the project on your machine
```bash
git clone https://github.com/anishLearnsToCode/meeting-cost-calculator.git
```

Enter project and install all dependencies
```bash
cd meeting-cost-calculator
npm i
```

Start the application 
```bash
npm start
```

The development version of the application will start on [localhost 3000](http://localhost:3000). 

## Application Overview 
There are 3 main sections in this application:

- [/employees](http://localhost:3000/employees)
- [/meetings](http://localhost:3000/meetings)
- [/analytics](http://localhost:3000/analytics)

In the employees' section you can create new employees and also delete old employees. In the meeting section you can 
create meetings with different combinations of employees at different days and different time slots. 
You can view your created meetings and also delete them. 

The cost for every meeting will be automatically calculated based upon the employees that are in them and their 
respective salaries. Also, you can select different frequency options such as (daily, weekly, monthly etc.)
which will also be taken into account during cost computation.
