import logo from "./assets/investment-calculator-logo.png";
import { useState } from "react";
import Form from "./components/Form";
import ResultTable from "./components/ResultTable";
import "./App.css";

function App() {
  const [yearlyData, setYearlyData] = useState([]);

  const calculateHandler = (userInput) => {
    let newYearlyData = [];
    let currentSavings = +userInput["current-savings"];
    const yearlyContribution = +userInput["yearly-contribution"];
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      newYearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    setYearlyData(newYearlyData);
  };

  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>
      <Form onCalculate={calculateHandler} />
      {yearlyData.length > 0 && <ResultTable yearlyData={yearlyData} />}
    </div>
  );
}

export default App;
