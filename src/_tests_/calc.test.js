import calculate from '../logic/calculate';

describe('Testing Calculate Module', () => {
  describe('Testing +/- operation', () => {
    it('Testing with positive numbers', () => {
      const calculator = { total: '4', next: '4', operation: '+/-' };
      const buttonName = '+/-';
      expect(calculate(calculator, buttonName)).toEqual({ total: -4, next: -4, operation: '+/-' });
    });

    it('Testing with negative numbers', () => {
      const calculator = { total: '-4', next: '-4', operation: '+/-' };
      const buttonName = '+/-';
      expect(calculate(calculator, buttonName)).toEqual({ total: 4, next: 4, operation: '+/-' });
    });
  });

  describe('Testing AC', () => {
    it('Testing AC', () => {
      const calculator = { total: '4', next: '5', operation: 'AC' };
      const buttonName = 'AC';
      expect(calculate(calculator, buttonName)).toEqual({ total: '0', next: '0', operation: '' });
    });
  });
});
