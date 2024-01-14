import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Card, CardBody } from '@material-tailwind/react';
import Chart from 'react-apexcharts';
import Loading from './Loading';

const LineChart = () => {
  const [graphData, setGraphData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Axios.get('https://react-dashboard-w4cc.onrender.com/api/graph')
      .then((response) => {
        setGraphData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching graph data:', error);
      });
  }, []);

  const chartConfig = {
    type: 'line',
    height: 440,
    width: '100%',
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
    <Card className='overflow-scroll w-full lg:w-[640px] '>
      <CardBody className='px-2 pb-0'>
        {isLoading ? (
          <div className='flex justify-center items-center h-[440px] w-full text-center'>
            <Loading />
          </div>
        ) : (
          <div className='w-full  max-w-[640px] mx-auto'>
            <Chart {...chartConfig} />
          </div>
        )}
      </CardBody>
    </Card>
  );
};

export default LineChart;
