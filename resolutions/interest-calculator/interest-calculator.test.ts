import { InterestCalculator } from './interest-calculator';

describe('InterestCalculator', () => {
  let calculator: InterestCalculator;

  beforeEach(() => {
    calculator = new InterestCalculator();
  });

  describe('calculateSimpleInterest', () => {
    it('should calculate the simple interest correctly', () => {
      const initialInvest = 500;
      const interestRate = 0.003;
      const investmentPeriod = 24;
      const expected = 536;

      const result = calculator.calculateSimpleInterest({
        initialInvest,
        interestRate,
        investmentPeriod,
      });

      expect(result).toBe(expected);
    });
  });

  describe('calculateCompoundInterest', () => {
    it('should calculate the compound interest correctly', () => {
      const initialInvest = 1000;
      const interestRate = 0.005;
      const investmentPeriod = 2;
      const expected = 1010.02;

      const result = calculator.calculateCompoundInterest({
        initialInvest,
        interestRate,
        investmentPeriod,
      });

      expect(result).toBeCloseTo(expected, 2);
    });
  });

  describe('calculateCompoundInterestWithNewInvestments', () => {
    it('should calculate the compound interest correctly with new investments', () => {
      const initialInvest = 1000;
      const interestRate = 0.005;
      const investmentPeriod = 48;
      const investContribuitionPerPeriod = 150;
      const expected = 9385.16;

      const result = calculator.calculateCompoundInterestWithNewInvestments({
        initialInvest,
        interestRate,
        investmentPeriod,
        investContribuitionPerPeriod,
      });

      expect(result).toBeCloseTo(expected, 2);
    });

    it('should receive R$ 537,27 with 0.3% of interest per month for 24 months with no new invests', () => {
      const initialInvest = 500;
      const interestRate = 0.003;
      const investmentPeriod = 24;
      const investContribuitionPerPeriod = 0;
      const expected = 537.27;

      const result = calculator.calculateCompoundInterestWithNewInvestments({
        initialInvest,
        interestRate,
        investmentPeriod,
        investContribuitionPerPeriod,
      });

      expect(result).toBeCloseTo(expected, 2);
    });
  });
});