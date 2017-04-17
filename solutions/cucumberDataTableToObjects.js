/*
  Given I have a data table on cucumber.js tests
  When I run the tests
  Then the header is the property name
  And each line is a different object with the values matching the property

  Table example:
  | name | age | country |
  | doug | 24  | Brazil  |
  | alex | 45  | Germany |
  | John | 10  | USA     |

  Data structure:
  [
    [ name, age, country ],
    [ doug, 24, Brazil   ],
    [ alex, 45, Germany  ],
    [ John, 10, USA      ]
  ]

  Expected Result:
  [
    { name: 'doug', age: 24, country: 'Brazil' },
    { name: 'alex', age: 45, country: 'Germany' },
    { name: 'John', age: 10, country: 'USA' }
  ]

*/
import { map, prop, splitAt, zipObj } from 'ramda';

export default (dataTable) => {
  const [[header], body] = splitAt(1, prop('rawTable', dataTable));
  return map(zipObj(header), body);
};
