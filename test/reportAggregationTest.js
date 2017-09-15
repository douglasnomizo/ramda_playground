/* eslint-disable object-curly-newline */

import test from 'ava';
import reportAggregation from '../solutions/reportAggregation';

test('should group by type and color and pick the largest by size', (t) => {
  const initialReport = {
    currentMonth: {
      activeEmployees: 5,
      hoursWorked: 100,
      numberOfLeaders: 1,
      inactiveEmployees: 1,
    },
    ever: {
      numberOfEmployees: 9,
      totalHoursWorked: 3500,
    },
  };

  const timesheets = [
    { id: 1, name: 'Johnny', hours: 70, leader: true, active: true },
    { id: 2, name: 'Derek', hours: 80, leader: false, active: true },
    { id: 3, name: 'Michel', hours: 10, leader: false, active: true },
    { id: 4, name: 'Daniel', hours: 0, leader: false, active: false },
    { id: 5, name: 'Marie', hours: 10, leader: true, active: true },
    { id: 6, name: 'Norton', hours: 15, leader: false, active: true },
    { id: 7, name: 'Clare', hours: 30, leader: false, active: true },
    { id: 8, name: 'Diana', hours: 30, leader: false, active: false },
    { id: 9, name: 'Daisy', hours: 30, leader: false, active: true },
    { id: 10, name: 'Don', hours: 30, leader: false, active: true },
  ];

  const expected = {
    currentMonth: {
      activeEmployees: 8,
      hoursWorked: 275,
      numberOfLeaders: 2,
      inactiveEmployees: 2,
    },
    ever: {
      numberOfEmployees: 10,
      totalHoursWorked: 3775,
    },
  };

  const result = reportAggregation(initialReport)(timesheets);
  t.deepEqual(result, expected);
});
