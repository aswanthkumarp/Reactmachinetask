import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Card, CardBody } from '@material-tailwind/react';
import Chart from 'react-apexcharts';

const PieChart = () => {
  const [pieChartData, setPieChartData] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/api/pie-chart')
      .then((response) => {
        setPieChartData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching pie chart data:', error);
      });
  }, []);

  const chartConfig = {
    type: 'pie',
    width: 280,
    height: 280,
    series: pieChartData.map((data) => data.value),
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      title: {
        show: '',
      },
      dataLabels: {
        enabled: false,
      },
      colors: pieChartData.map((data) => data.color),
      legend: {
        show: false,
      },
    },
  };

  return (
    <Card className='ml-3'>
      <CardBody className='mt-4 grid place-items-center px-2'>
        <Chart {...chartConfig} />
      </CardBody>
      <ul className='list-none p-0 m-4 text-center mr-auto'>
        {pieChartData.map((data, index) => (
          <li key={index} className='mb-2'>
            <span
              style={{ backgroundColor: data.color }}
              className='inline-block w-3 h-3 rounded-full mr-2'
            ></span>
            {data.label}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default PieChart;
