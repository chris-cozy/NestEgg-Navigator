function YearlyDataRow({ data }) {
  return (
    <tr>
      <td>{data.year}</td>
      <td>{data.yearlyInterest}</td>
      <td>{data.savingsEndOfYear}</td>
      <td>{data.yearlyContribution}</td>
    </tr>
  );
}
