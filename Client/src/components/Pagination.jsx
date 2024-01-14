import React from 'react';
import { Button, IconButton } from '@material-tailwind/react';
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

export function Pagination() {
  const [active, setActive] = React.useState(1);

  const getItemProps = (index) => ({
    variant: active === index ? `$classname = b` : '',
    color: 'white',
    onClick: () => setActive(index),
    style: {
      border: active === index ? '2px solid black' : 'none',
    },
  });
  const next = () => {
    if (active === 5) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };

  return (
    <div className='flex items-center justify-center lg:justify-center lg:items-center lg:gap-4 gap-1 '>
      <Button
        variant='text'
        className='flex items-center gap-2'
        onClick={prev}
        disabled={active === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className='h-4 w-4' />
      </Button>
      <div className='flex items-center gap-2'>
        <IconButton {...getItemProps(1)}>1</IconButton>
        <IconButton {...getItemProps(2)}>2</IconButton>
        <IconButton {...getItemProps(3)}>..</IconButton>
        <IconButton {...getItemProps(4)}>9</IconButton>
        <IconButton {...getItemProps(5)}>10</IconButton>
      </div>
      <Button
        variant='text'
        className='flex items-center gap-2'
        onClick={next}
        disabled={active === 5}
      >
        <ArrowRightIcon strokeWidth={2} className='h-4 w-4' />
      </Button>
    </div>
  );
}
