import UserImg from '../assets/Rectangle 10.png';

const NavbarComponent = () => {
  return (
    <div className='flex bg-transparent mt-3'>
      <div className='flex ml-8 justify-center items-center'>
        <p className='text-sm font-semibold'>Good Morning!</p>
        <p>🌞</p>
      </div>
      <div className='flex bg-white roundend-lg shadow-md ml-auto lg:mr-2 mr-14 justify-between p-1 rounded-lg gap-2 '>
        <div className='flex flex-col '>
          <p className='text-sm font-semibold'>John Doe</p>
          <p className='text-basic'>john@doe.com</p>
        </div>
        <div className='py-3 w-25 h-25 hidden lg:block '>
          <img
            src={UserImg}
            alt='userimg'
            className='h-full w-full object-contain'
          />
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;
