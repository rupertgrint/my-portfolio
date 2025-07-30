import { Project } from '../../../public/types/project';
import Image from 'next/image';
import ImageSection from './ImageSection';
import RoundButton from '../ui/roundButton';

type Props = Project & { style?: React.CSSProperties };

export default function ProjectCard({
  title,
  description,
  techStack,
  images,
  url,
  style,
}: Props) {
  return (
    <div
      style={style}
      className='flex flex-col md:flex-row p-10 md:p-8 my-14 min-h-[500px] mx-4 rounded-lg'
    >
      <div className='flex-1 flex flex-col justify-start md:justify-end'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-lg font-semibold text-text-primary dark:text-foreground'>
            {title}
          </h1>
          <p className='text-text-primary dark:text-foreground text-md'>
            {description}
          </p>
          <ul className='flex flex-wrap text-sm gap-1 py-1 text-gray-medium-dark dark:text-foreground'>
            {techStack?.map((tech, index) => (
              <li key={index} className='whitespace-nowrap'>
                {tech}
              </li>
            ))}
          </ul>
          <div>
            <RoundButton url={url} />
          </div>
        </div>
      </div>
      <div className='flex-1 flex items-center justify-center md:pl-4 pt-8 md:pt-0'>
        <ImageSection title={title} images={images} />
      </div>
    </div>
  );
}
