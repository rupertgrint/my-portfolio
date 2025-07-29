import { IoMailOutline } from 'react-icons/io5';
import { PiGithubLogo } from 'react-icons/pi';
import { PiLinkedinLogo } from 'react-icons/pi';
import IconButton from '../ui/IconButton';

export default function IconNav() {
  return (
    <div className='flex'>
      <IconButton icon={<IoMailOutline />} />
      <a
        href='https://github.com/rupertgrint'
        target='_blank'
        rel='noopener noreferrer'
      >
        <IconButton icon={<PiGithubLogo />} />
      </a>
      <a
        href='https://www.linkedin.com/in/hyun-k-park/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <IconButton icon={<PiLinkedinLogo />} />
      </a>
    </div>
  );
}
