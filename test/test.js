import { expect } from 'chai';
import valueOr from '../solutions/firstRamda';

describe('Ramda', () => {
  describe('propOr', () => {
    it('Should return property from object', () => {
      expect(valueOr({ value: 10 })).to.equal(10);
    });

    it('Should return default value if property does not exist', () => {
      expect(valueOr({})).to.equal(0);
    });
  });
});
