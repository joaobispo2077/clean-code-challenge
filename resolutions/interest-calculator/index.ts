import { InterestCalculator } from './interest-calculator';

const interestCalculator = new InterestCalculator();

const initialInvest = 1000;
const interestRate = 0.005;
const investmentPeriodInMonths = 48;
const investContribuitionPerMonth = 150;

const compoundInterest =
  interestCalculator.calculateCompoundInterestWithNewInvestments({
    initialInvest,
    interestRate,
    investmentPeriod: investmentPeriodInMonths,
    investContribuitionPerPeriod: investContribuitionPerMonth,
  });

const formattedCompoundInterest = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
}).format(Number(compoundInterest));

function convertRateToPercent(interestRate: number) {
  return `${interestRate * 100}%`;
}

console.log(
  `Investing ${formattedCompoundInterest} with ${convertRateToPercent(
    interestRate
  )} of interest per month for ${investmentPeriodInMonths} months`
);
