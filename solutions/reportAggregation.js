/*
  Given I have a raw data with employees timesheets
  And I already have the initial report from previous month
  When report is triggered
  Then the data should be the aggregation of initial report with the new data

  Exemple:

  Input:

  initialReportData:
  {
    currentMonth: {
      numberOfEmployees: 5,
      numberOfLeaders: 1,
      inactiveEmployees: 1,
      hoursWorked: 100,
    },
    ever: {
      numberOfEmployees: 10,
      hoursWorked: 3500,
    },
  }

  timesheets:
  [
    { id: 1, name: 'Johnny', hours: 70, leader: true,   active: true  },
    { id: 2, name: 'Derek',  hours: 80, leader: false,  active: true  },
    { id: 3, name: 'Michel', hours: 10, leader: false,  active: true  },
    { id: 4, name: 'Daniel', hours: 0,  leader: false,  active: false },
    { id: 5, name: 'Marie',  hours: 10, leader: true,   active: true  },
    { id: 6, name: 'Norton', hours: 15, leader: false,  active: true  },
    { id: 7, name: 'Clare',  hours: 30, leader: false,  active: true  },
    { id: 8, name: 'Diana',  hours: 30, leader: false,  active: false },
    { id: 9, name: 'Daisy',  hours: 30, leader: false,  active: true  },
    { id: 10, name: 'Don',    hours: 30, leader: false,  active: true  },
  ]

  Expected result:
  {
    currentMonth: {
      activeEmployees: 8,
      hoursWorked: 100,
      numberOfLeaders: 2,
      inactiveEmployees: 2,
    },
    ever: {
      numberOfEmployees: 10,
      totalHoursWorked: 3500,
    },
  }

*/

import {
  __,
  add,
  complement,
  curry,
  filter,
  length,
  map,
  pathOr,
  prop,
  propEq,
  sum,
} from "ramda";

const propTrue = propEq(__, true);
const leader = propTrue("leader");
const active = propTrue("active");
const inactive = complement(active);

const reportAggregation = (initialReport, timesheets) => {
  const activeEmployees = filter(active, timesheets);
  const inactiveEmployees = filter(inactive, timesheets);
  const leaders = filter(leader, timesheets);
  const hoursWorked = sum(map(prop("hours"), activeEmployees));
  const totalHoursWorked = add(
    hoursWorked,
    pathOr(0, ["ever", "totalHoursWorked"], initialReport)
  );

  return {
    currentMonth: {
      activeEmployees: length(activeEmployees),
      hoursWorked,
      numberOfLeaders: length(leaders),
      inactiveEmployees: length(inactiveEmployees),
    },
    ever: {
      numberOfEmployees: length(timesheets),
      totalHoursWorked,
    },
  };
};

export default curry(reportAggregation);
