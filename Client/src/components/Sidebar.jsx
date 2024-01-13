import React from 'react';
import Logo from '../assets/Briefcase.png';
import StatBoard from '../assets/StatBoard.png';
import SideBarLinks from './SideBarLinks';
import CircleMenu from '../assets/Circled Menu.png';
import Support from '../assets/Support.png';
import Plugin from '../assets/Puzzle.png';
import Help from '../assets/Help.png';
import Logout from '../assets/Shutdown.png';

const Sidebar = () => {
  return (
    <div className='relative flex h-screen flex-col bg-[#4C566A]'>
      <div className='bg-[#4C566A] flex flex-col w-52 h-screen'>
        <div className='flex flex-col justify-center items-center p-4'>
          <img src={Logo} alt='Logo' className='h-16 w-16 mb-2' />
          <img src={StatBoard} alt='Title' className=' w-auto' />
        </div>
        <div className='mt-28  mr-1 flex flex-col gap-6 '>
          <SideBarLinks
            logo={CircleMenu}
            title={'Dashboard'}
            isDashboard={true}
          />
          <SideBarLinks logo={Support} title={'Support'} />
          <SideBarLinks logo={Plugin} title={'Plugin'} />
          <SideBarLinks logo={Help} title={'Help'} />
        </div>
      </div>
      <div className='flex items-center mt-auto justify-center bg-white h-5 '>
        <p className=' text-lg text-red-500 '>Logout</p>
        <img src={Logout} alt='logout' />
      </div>
    </div>
  );
};

export default Sidebar;
