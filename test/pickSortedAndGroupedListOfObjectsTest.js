import { expect } from 'chai';

import pickSortedAndGroupedListOfShapes from '../solutions/pickSortedAndGroupedListOfObjects';

describe('Group + Sort + Pick Largest', () => {
  it('should group by type and color and pick the largest by size', () => {
    const input = [
      { type: 'square', color: 'green', size: 80 },
      { type: 'square', color: 'blue', size: 10 },
      { type: 'square', color: 'blue', size: 20 },
      { type: 'rect', color: 'green', size: 5 },
      { type: 'rect', color: 'green', size: 30 },
      { type: 'rect', color: 'white', size: 25 },
      { type: 'circle', color: 'purple', size: 40 },
      { type: 'circle', color: 'purple', size: 15 },
    ];

    const expected = {
      square: { green: 80, blue: 20 },
      rect: { green: 30, white: 25 },
      circle: { purple: 40 },
    };

    const result = pickSortedAndGroupedListOfShapes(input);
    expect(result).to.deep.equal(expected);
  });
});
