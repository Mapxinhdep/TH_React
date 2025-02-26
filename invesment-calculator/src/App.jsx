import React, { useState } from "react";
import "./App.css";

function InvestmentCalculator() {
  const [investMoney, setInvestMoney] = useState();
  const [rate, setRate] = useState();
  const [goal, setGoal] = useState();
  const [result, setResult] = useState([]);

  const calculateInvestment = () => {
    let year = new Date().getFullYear();
    let money = parseFloat(investMoney);
    let interestRate = parseFloat(rate) / 100;
    let calculations = [];

    while (money < goal) {
      let newMoney = money * (1 + interestRate);
      calculations.push({
        year: ++year,
        money: money.toFixed(2),
        rate: rate,
        endYear: newMoney.toFixed(2),
      });
      money = newMoney;
    }

    setResult(calculations);
  };

  return (
    <div className="container">
      <h2>Investment Calculator</h2>
      <div className="input-group">
        <label>Input Your Invest Money</label>
        <input
          type="number"
          value={investMoney}
          onChange={(e) => setInvestMoney(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Input Rate (%)</label>
        <input
          type="number"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Input Your Goal</label>
        <input
          type="number"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        />
      </div>
      <button onClick={calculateInvestment}>Calculate</button>
      
      {result.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Year</th>
              <th>Money</th>
              <th>Rate (%)</th>
              <th>End Year</th>
            </tr>
          </thead>
          <tbody>
            {result.map((row, index) => (
              <tr key={index}>
                <td>{row.year}</td>
                <td>{row.money}</td>
                <td>{row.rate}</td>
                <td>{row.endYear}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default InvestmentCalculator;
