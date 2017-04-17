import { expect } from 'chai';

import convert from '../solutions/cucumberDataTableToObjects';

describe('Cucumber', () => {
  it('should convert data table to list of objects', () => {
    const dataTable = {
      rawTable: [
        ['name', 'age', 'country'],
        ['doug', 24, 'Brazil'],
        ['alex', 45, 'Germany'],
        ['John', 10, 'USA'],
      ],
    };

    const objectsList = [
      { name: 'doug', age: 24, country: 'Brazil' },
      { name: 'alex', age: 45, country: 'Germany' },
      { name: 'John', age: 10, country: 'USA' },
    ];

    const result = convert(dataTable);
    expect(result).to.deep.equal(objectsList);
  });
});
