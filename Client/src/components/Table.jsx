import { Card, Typography } from '@material-tailwind/react';
import Axios from 'axios';
import { useEffect, useState } from 'react';

const TABLE_HEAD = ['id', 'Name', 'Quantity', 'Price'];

export function Table() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    Axios.get('https://react-dashboard-w4cc.onrender.com/api/table')
      .then((response) => {
        setTableData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching table data:', error);
      });
  }, []);

  return (
    <Card className='h-full w-[85%] mb-3 overflow-scroll'>
      <table className='w-full min-w-max table-auto text-left'>
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className='border-b border-blue-gray-100 border-l p-4'
              >
                <Typography
                  variant='small'
                  color='blue-gray'
                  className='font-normal leading-none opacity-70'
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map(({ id, name, quantity, price }, index) => (
            <tr key={id} className={`${index % 2 === 0 ? 'bg-[#E5E9F0]' : ''}`}>
              <td className='p-4 border-l border-blue-gray-100'>
                <Typography
                  variant='small'
                  color='blue-gray'
                  className='font-normal'
                >
                  {id}
                </Typography>
              </td>
              <td className='p-4 border-l border-blue-gray-100'>
                <Typography
                  variant='small'
                  color='blue-gray'
                  className='font-normal'
                >
                  {name}
                </Typography>
              </td>
              <td className='p-4 border-l border-blue-gray-100'>
                <Typography
                  variant='small'
                  color='blue-gray'
                  className='font-normal'
                >
                  {quantity}
                </Typography>
              </td>
              <td className='p-4 border-l border-blue-gray-100'>
                <Typography
                  variant='small'
                  color='blue-gray'
                  className='font-normal'
                >
                  {price}
                </Typography>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}
