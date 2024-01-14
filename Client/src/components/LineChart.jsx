import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Card, CardBody } from '@material-tailwind/react';
import Chart from 'react-apexcharts';

const LineChart = () => {
  const [graphData, setGraphData] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/api/graph')
      .then((response) => {
        setGraphData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching graph data:', error);
      });
  }, []);

  const chartConfig = {
    type: 'line',
    height: 440,
    width: 640,
    series: [
      {
        name: 'Sales',
        data: graphData.map((dataPoint) => dataPoint.y),
      },
    ],
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
      colors: ['#88C0D0'],
      stroke: {
        lineCap: 'round',
        curve: 'smooth',
      },
      markers: {
        size: 6,
        colors: '#88C0D0',
      },
      xaxis: {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          style: {
            colors: '#616161',
            fontSize: '12px',
            fontFamily: 'inherit',
            fontWeight: 400,
          },
        },
        categories: graphData.map((dataPoint) => dataPoint.x),
      },
      yaxis: {
        labels: {
          style: {
            colors: '#616161',
            fontSize: '12px',
            fontFamily: 'inherit',
            fontWeight: 400,
          },
        },
      },
      grid: {
        show: true,
        borderColor: '#dddddd',

        xaxis: {
          lines: {
            show: true,
          },
        },
        padding: {
          top: 5,
          right: 20,
        },
      },
      fill: {
        opacity: 0.8,
      },
      tooltip: {
        theme: 'dark',
      },
    },
  };

  return (
    <Card>
      <CardBody className='px-2 pb-0 overflow-x-auto '>
      <div className='w-full max-w-[640px] mx-auto '>
      <Chart {...chartConfig} />
      </div>
      </CardBody>
    </Card>
  );
};

export default LineChart;
