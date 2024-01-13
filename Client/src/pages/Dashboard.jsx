import LineChart from '../components/LineChart';
import NavbarComponent from '../components/NavbarComponent';
import PieChart from '../components/PieChart';
import Sidebar from '../components/Sidebar';
import { Table } from '../components/Table';
import UserDetail from '../components/UserDetail';

const Dashboard = () => {
  return (
    <div className='flex '>
      <Sidebar />
      <div className='flex flex-col w-full bg-[#ECEFF4]'>
        <NavbarComponent />
        <div className='flex gap-6 ml-6 mt-6'>
          <LineChart />
          <PieChart />
        </div>
        <div className='flex gap-6 ml-6 mt-6'>
          <Table />
          <UserDetail />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
