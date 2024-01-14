import React from 'react';
import {
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
  Drawer,
  Card,
} from '@material-tailwind/react';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import LogoImg from '../assets/Briefcase.png';
import StatBoard from '../assets/StatBoard.png';
import CircleMenu from '../assets/Circled Menu.png';
import Support from '../assets/Support.png';
import Plugin from '../assets/Puzzle.png';
import Help from '../assets/Help.png';
import Logout from '../assets/Shutdown.png';

export default function SidebarWithBurgerMenu() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <>
      <div className='lg:hidden bg-[#3B4252] '>
        <IconButton variant='text' size='lg' onClick={openDrawer}>
          {isDrawerOpen ? (
            <XMarkIcon className='h-8 w-8 stroke-2' />
          ) : (
            <Bars3Icon className='h-8 w-8 stroke-2 bg-white' />
          )}
        </IconButton>
      </div>
      <div className='hidden lg:flex flex-col  top-0 h-screen bg-[#3B4252] sticky '>
        <Card color='transparent' shadow={false} className=' h-full w-full '>
          <div className='mb-2 flex flex-col items-center gap-4 p-4'>
            <img src={LogoImg} alt='brand' className='h-25 w-25' />
            <img src={StatBoard} alt='brand' className='h-25 w-25' />
          </div>

          <List className='mt-20 gap-5 flex-grow '>
            <ListItem className='bg-white'>
              <ListItemPrefix>
                <img src={CircleMenu} alt='Dashboard' />
              </ListItemPrefix>
              Dashboard
            </ListItem>
            <ListItem className='bg-[#2E3440] text-white'>
              <ListItemPrefix>
                <img src={Support} alt='Support' />
              </ListItemPrefix>
              Support
            </ListItem>
            <ListItem className='bg-[#2E3440] text-white'>
              <ListItemPrefix>
                <img src={Plugin} alt='Plugin' />
              </ListItemPrefix>
              Plugins
            </ListItem>
            <ListItem className='bg-[#2E3440] text-white'>
              <ListItemPrefix>
                <img src={Help} alt='Help' />
              </ListItemPrefix>
              Help
            </ListItem>
          </List>
          <div className='bg-white mt-auto w-full p-4 text-center flex gap-2 justify-center '>
            <p className='text-red '>Logout</p>
            <img src={Logout} alt='' />
          </div>
        </Card>
      </div>
      <Drawer
        open={isDrawerOpen}
        onClose={closeDrawer}
        className='bg-[#3B4252]  absolute'
      >
        <Card color='transparent' shadow={false} className=' h-full w-full '>
          <div className='mb-2 flex flex-col items-center gap-4 p-4'>
            <img src={LogoImg} alt='brand' className='h-25 w-25' />
            <img src={StatBoard} alt='brand' className='h-25 w-25' />
          </div>

          <List className='mt-20 gap-5 flex-grow '>
            <ListItem className='bg-white'>
              <ListItemPrefix>
                <img src={CircleMenu} alt='Dashboard' />
              </ListItemPrefix>
              Dashboard
            </ListItem>
            <ListItem className='bg-[#2E3440] text-white'>
              <ListItemPrefix>
                <img src={Support} alt='Support' />
              </ListItemPrefix>
              Support
            </ListItem>
            <ListItem className='bg-[#2E3440] text-white'>
              <ListItemPrefix>
                <img src={Plugin} alt='Plugin' />
              </ListItemPrefix>
              Plugins
            </ListItem>
            <ListItem className='bg-[#2E3440] text-white'>
              <ListItemPrefix>
                <img src={Help} alt='Help' />
              </ListItemPrefix>
              Help
            </ListItem>
          </List>
          <div className='bg-white mt-auto w-full p-4 text-center flex gap-2 justify-center '>
            <p className='text-red '>Logout</p>
            <img src={Logout} alt='' />
          </div>
        </Card>
      </Drawer>
    </>
  );
}
