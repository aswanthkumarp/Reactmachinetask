import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Card, CardBody } from '@material-tailwind/react';
import Chart from 'react-apexcharts';
import Loading from './Loading';

const PieChart = () => {
  const [pieChartData, setPieChartData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Axios.get('https://react-dashboard-w4cc.onrender.com/api/pie-chart')
      .then((response) => {
        setPieChartData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching pie chart data:', error);
      });
  }, []);
  const staticColors = ['#A3BE8C', '#4cca5d', '#a0eec0', '#44ec1a', '#5ec985'];
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
      colors: staticColors,
      legend: {
        show: false,
      },
      tooltip: {
        enabled: true,
        y: {
          formatter: function (val, { seriesIndex }) {
            return pieChartData[seriesIndex].label + ': ' + val;
          },
        },
      },
    },
  };

  return (
    <Card className='ml-3'>
      {isLoading ? (
        <div className='flex justify-center items-center h-[280px] w-[280px] '>
          <Loading />
        </div>
      ) : (
        <div>
          <CardBody className='mt-4 grid place-items-center px-2'>
            <Chart {...chartConfig} />
          </CardBody>
          <ul className='list-none p-0 m-4 text-center mr-auto'>
            {pieChartData.map((data, index) => (
              <li key={index} className='mb-2'>
                <span
                  style={{ backgroundColor: staticColors[index] }}
                  className='inline-block w-3 h-3 rounded-full mr-2'
                ></span>
                {data.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </Card>
  );
};

export default PieChart;
