type CalculateInterestArgs = {
  initialInvest: number;
  interestRate: number;
  investmentPeriod: number;
};

type CalculateCompoundInterestWithNewInvestmentsArgs = {
  investContribuitionPerPeriod: number;
} & CalculateInterestArgs;

export class InterestCalculator {
  calculateSimpleInterest({
    initialInvest,
    interestRate,
    investmentPeriod,
  }: CalculateInterestArgs): number {
    return initialInvest * (1 + interestRate * investmentPeriod);
  }

  calculateCompoundInterest({
    initialInvest,
    interestRate,
    investmentPeriod,
  }: CalculateInterestArgs): number {
    return initialInvest * Math.pow(1 + interestRate, investmentPeriod);
  }

  calculateCompoundInterestWithNewInvestments({
    initialInvest,
    interestRate,
    investmentPeriod,
    investContribuitionPerPeriod,
  }: CalculateCompoundInterestWithNewInvestmentsArgs): number {
    let amount = initialInvest;

    for (let i = 0; i < investmentPeriod; i++) {
      amount = this.calculateCompoundInterest({
        initialInvest: amount,
        interestRate,
        investmentPeriod: 1,
      });
      amount += investContribuitionPerPeriod;
    }

    return amount;
  }
}

