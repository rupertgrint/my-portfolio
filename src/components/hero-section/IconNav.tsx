'use client';

import { IoMailOutline } from 'react-icons/io5';
import { PiGithubLogo } from 'react-icons/pi';
import { PiLinkedinLogo } from 'react-icons/pi';
import { IoDocumentTextOutline } from 'react-icons/io5';
import IconButton from '../ui/IconButton';

export default function IconNav() {
  const handleEmailClick = () => {
    const email = 'hyun.heather.park@gmail.com';
    const subject = 'Portfolio Contact - Hi Hyun!';
    const body = `Hi Hyun,


Best regards,
[Your Name]`;

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, '_blank');
  };

  const handleResumeClick = () => {
    const resumeUrl = '/files/Resume.pdf';

    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Hyun_Park_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='flex'>
      <IconButton icon={<IoMailOutline />} onClick={handleEmailClick} />
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
      <IconButton
        icon={<IoDocumentTextOutline />}
        onClick={handleResumeClick}
      />
    </div>
  );
}
