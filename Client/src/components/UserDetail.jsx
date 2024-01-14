import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from '@material-tailwind/react';
import UserImg from '../assets/media.png';
import TwitterLogo from '../assets/twitter.png';
import InstagramLogo from '../assets/instagram.png';
import FacebookLogo from '../assets/facebook.png';

export default function ProfileCard() {
  return (
    <Card className='lg:w-72 lg:h-96 h-32 mb-4 w-[85%]   lg:mr-36  '>
      <CardHeader className='hidden lg:block' floated={false}>
        <img src={UserImg} alt='profile-picture' className='w-full h-full  ' />
      </CardHeader>
      <CardBody className='text-center'>
        <Typography  color='blue-gray' className='mb-2 lg:text-xl text-sm'>
          Natalie Paisley
        </Typography>
        <Typography color='blue-gray' className='font-medium lg:text-base text-sm' textGradient>
          CEO / Co-Founder
        </Typography>
      </CardBody>
      <CardFooter className='flex justify-center gap-7 pt-0 lg:pt-2'>
        <Tooltip content='Like'>
          <Typography
            as='a'
            href='#facebook'
            variant='lead'
            color='blue'
            textGradient
          >
            <img src={FacebookLogo} alt='' />
          </Typography>
        </Tooltip>
        <Tooltip content='Follow'>
          <Typography
            as='a'
            href='#twitter'
            variant='lead'
            color='light-blue'
            textGradient
          >
            <img src={InstagramLogo} alt='' />
          </Typography>
        </Tooltip>
        <Tooltip content='Follow'>
          <Typography
            as='a'
            href='#instagram'
            variant='lead'
            color='purple'
            textGradient
          >
            <img src={TwitterLogo} alt='' />
          </Typography>
        </Tooltip>
      </CardFooter>
    </Card>
  );
}
