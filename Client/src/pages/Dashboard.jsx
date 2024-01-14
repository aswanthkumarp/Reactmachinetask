import LineChart from '../components/LineChart';
import NavbarComponent from '../components/NavbarComponent';
import { Pagination } from '../components/Pagination';
import PieChart from '../components/PieChart';
import Sidebar from '../components/Sidebar';
import { Table } from '../components/Table';
import ProfileCard from '../components/UserDetail';

const Dashboard = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex flex-col lg:w-full w-screen bg-[#ECEFF4] h-full'>
        <NavbarComponent />
        <div className='flex flex-col lg:flex-row gap-12 mr-0 lg:mr-4 mt-6 ml-4 lg:ml-8 '>
          <LineChart />
          <PieChart />
        </div>
        <div className='flex flex-col lg:flex-col ml-4 lg:ml-6 mt-6 mb-6 justify-between lg:justify-normal'>
          <div className='lg:flex gap-6'>
            <Table />
            <ProfileCard />
          </div>
          <div className='  mt-0 lg:mt-5'>
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
