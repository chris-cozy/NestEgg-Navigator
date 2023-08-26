function ResultTable({ yearlyData }) {
  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Yearly Interest</th>
          <th>End of Year Savings</th>
          <th>Yearly Contribution</th>
        </tr>
      </thead>
      <tbody>
        {yearlyData.map((yearData) => (
          <YearlyDataRow data={yearData} />
        ))}
      </tbody>
    </table>
  );
}
