import LineChart from '../components/LineChart';
import NavbarComponent from '../components/NavbarComponent';
import PieChart from '../components/PieChart';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex flex-col w-full bg-[#ECEFF4]'>
        <NavbarComponent />
        <div className='flex gap-6 ml-6'>
          <LineChart />
          <PieChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
