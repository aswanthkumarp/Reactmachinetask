import LineChart from '../components/LineChart';
import NavbarComponent from '../components/NavbarComponent';
import { Pagination } from '../components/Pagination';
import PieChart from '../components/PieChart';
import Sidebar from '../components/Sidebar';
import { Table } from '../components/Table';
import ProfileCard from '../components/UserDetail';

const Dashboard = () => {
  return (
    <div className='flex '>
      <Sidebar />
      <div className='flex flex-col w-full  bg-[#ECEFF4]'>
        <NavbarComponent />
        <div className='flex flex-col lg:flex-row gap-6 mr-16 mt-6 lg:ml-8'>
          <LineChart />
          <PieChart />
        </div>
        <div className='flex flex-col lg:flex-col lg:ml-6 mt-6 mb-6 '>
          <div className='lg:flex gap-6  '>
            <Table />
            <ProfileCard />
          </div>

          <div className='mt-5 '>
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
