import React, { useState } from "react";
import { Slider, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import LoanSliderMarks from "./LoanSliderMarks";
import "./App.css";

const PrettoSlider = styled(Slider)(({ theme }) => ({
  color: "MediumVioletRed",
  height: 10,
  "& .MuiSlider-thumb": {
    height: 25,
    width: 25,
    backgroundColor: "white",
    border: "3px solid black",
    marginTop: -9,
    marginLeft: -9,
  },
  "& .MuiSlider-track": {
    height: 10,
    borderRadius: 4,
  },
  "& .MuiSlider-rail": {
    height: 10,
    borderRadius: 4,
  },
}));

function LoanCalculatorApp() {
  const [loanAmount, setLoanAmount] = useState(2755000);
  const [loanTenure, setLoanTenure] = useState(20);
  const [interestRate, setInterestRate] = useState(7);
  const maxLoanAmount = 10000000; // Maximum loan amount allowed
  const maxLoanTenure = 30; // Maximum loan tenure in years
  const maxInterestRate = 20; // Maximum interest rate allowed

  const calculateMonthlyPayment = () => {
    const monthlyInterestRate = interestRate / 1200;
    const totalMonths = loanTenure * 12;
    const monthlyPayment =
      (loanAmount *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, totalMonths)) /
      (Math.pow(1 + monthlyInterestRate, totalMonths) - 1);
    return monthlyPayment.toFixed(2);
  };

  return (
    <div className="App">
      <div className="CalApp">
        <h1 className="CalHeading">
          <u>Mortage Calculator</u>
        </h1>

        <div>
          <Typography gutterBottom>
            <strong>Loan Amount</strong>
          </Typography>
          <PrettoSlider
            value={loanAmount}
            marks={LoanSliderMarks.marksAmt}
            onChange={(event, newValue) => setLoanAmount(newValue)}
            defaultValue={loanAmount}
            max={maxLoanAmount}
          />
          <Typography variant="caption">{loanAmount}</Typography>
        </div>

        <div>
          <Typography gutterBottom>
            <strong>Loan Tenure (Years)</strong>
          </Typography>
          <PrettoSlider
            value={loanTenure}
            marks={LoanSliderMarks.marksTenure}
            onChange={(event, newValue) => setLoanTenure(newValue)}
            defaultValue={loanTenure}
            max={maxLoanTenure}
          />
          <Typography variant="caption">{loanTenure}</Typography>
        </div>

        <div>
          <Typography gutterBottom>
            <strong>Interest Rate (%)</strong>
          </Typography>
          <PrettoSlider
            value={interestRate}
            marks={LoanSliderMarks.marksInt}
            onChange={(event, newValue) => setInterestRate(newValue)}
            defaultValue={interestRate}
            max={maxInterestRate}
          />
          <Typography variant="caption">{interestRate}</Typography>
        </div>

        <div>
          <Typography gutterBottom>
            <strong>Monthly Payment</strong>
          </Typography>
          <Typography variant="h5">Rs {calculateMonthlyPayment()}</Typography>
        </div>
      </div>
    </div>
  );
}

export default LoanCalculatorApp;
