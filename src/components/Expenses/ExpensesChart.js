import React from 'react';
import Chart from "../Chart/Chart";

const ExpensesChart = ({expenses}) => {

    let chartDataPoint = [];
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

    chartDataPoint = months.map((month, index) =>
        chartDataPoint[index] = {label: month, value: 0}
    )

    for (const expense of expenses) {
        const expenseMonth = expense.date.getMonth();
        chartDataPoint[expenseMonth].value += parseInt(expense.amount);
    }
    return (
        <Chart dataPoints={chartDataPoint}/>
    );
};

export default ExpensesChart;