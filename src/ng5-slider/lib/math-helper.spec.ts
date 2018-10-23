import { MathHelper } from './math-helper';

describe('MathHelper', () => {
  describe('roundToPrecisionLimit', () => {
    it('gets rid of digits to the left of precision limit', () => {
      expect(MathHelper.roundToPrecisionLimit(123456789010 + 1, 11)).toEqual(123456789010);
      expect(MathHelper.roundToPrecisionLimit(123456789010 - 1, 11)).toEqual(123456789010);
    });

    it('keeps digits to the right of precision limit', () => {
      expect(MathHelper.roundToPrecisionLimit(123456789010 + 10, 11)).toEqual(123456789010 + 10);
      expect(MathHelper.roundToPrecisionLimit(123456789010 - 10, 11)).toEqual(123456789010 - 10);
    });

    it('helps with rounding common floating point operations', () => {
      expect(0.3 - 0.2).not.toEqual(0.1); // yeah, floating point
      expect(MathHelper.roundToPrecisionLimit(0.3 - 0.2, 12)).toEqual(0.1); // that's better
    });
  });
});