import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { fetchData } from "./api";

const Chart = () => {
  const [ChartData, setChartData] = useState([""]);

  useEffect(() => {
    const fetchAPI = async () => {
      const { states } = await fetchData();
      setChartData(states);
    };

    fetchAPI();
  }, []);

  const lineChart = (
    <Bar
      data={{
        labels: ChartData.map(({ state }) => state),
        datasets: [
          {
            data: ChartData.map(({ confirmedCases }) => confirmedCases),
            label: "Confirmed Cases",
            backgroundColor: "purple",
            hoverBorderWidth: 3,
            borderWidth: 1,
            borderColor: "black",
          },
          {
            data: ChartData.map(({ casesOnAdmission }) => casesOnAdmission),
            label: "Active Cases",
            backgroundColor: "green",
          },
          {
            data: ChartData.map(({ discharged }) => discharged),
            label: "Discharged Cases",
            backgroundColor: "blue",
          },
          {
            data: ChartData.map(({ death }) => death),
            label: "Deaths",
            backgroundColor: "red",
          },
        ],
      }}
    />
  );

  return <div>{lineChart}</div>;
};

export default Chart;
