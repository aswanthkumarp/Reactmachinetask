import React from 'react';

const SideBarLinks = ({ logo, title, isDashboard }) => {
  const linkStyle = isDashboard
    ? 'flex items-center text-black cursor-pointer p-2 bg-white ml-5 rounded-lg '
    : 'flex items-center bg-[#2E3440] text-white hover:bg-[#2E3440] ml-5 cursor-pointer p-2 rounded-lg';

  return (
    <div className={linkStyle}>
      <img src={logo} alt='' className='h-6 w-6 mr-2' />
      <p>{title}</p>
    </div>
  );
};

export default SideBarLinks;
