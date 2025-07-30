import Image from 'next/image';
import { Project } from '../../../public/types/project';

type Props = Pick<Project, 'images' | 'title'>;

export default function ImageSection({ images, title }: Props) {
  return (
    <div className='relative w-full max-w-md aspect-video'>
      {images.length === 1 ? (
        <div className='relative w-full h-full rounded-lg overflow-hidden shadow-lg group animate-float'>
          <Image
            src={images[0]}
            alt={`${title} screenshot`}
            fill
            className='object-cover transition-all duration-500 ease-out group-hover:scale-105 group-hover:-translate-y-2 group-hover:shadow-2xl'
            sizes='(max-width: 768px) 100vw, 50vw'
          />
        </div>
      ) : (
        <>
          <div className='absolute -top-2 -left-2 w-3/4 h-3/4 rounded-lg overflow-hidden shadow-lg z-10 group animate-float-delayed'>
            <Image
              src={images[0]}
              alt={`${title} screenshot 1`}
              fill
              className='object-cover transition-all duration-500 ease-out group-hover:scale-105 group-hover:-translate-y-1 group-hover:shadow-2xl'
              sizes='(max-width: 768px) 75vw, 37.5vw'
            />
          </div>
          <div className='absolute -bottom-2 -right-2 w-3/4 h-3/4 rounded-lg overflow-hidden shadow-lg group animate-float'>
            <Image
              src={images[1]}
              alt={`${title} screenshot 2`}
              fill
              className='object-cover transition-all duration-500 ease-out group-hover:scale-105 group-hover:translate-y-1 group-hover:shadow-2xl'
              sizes='(max-width: 768px) 75vw, 37.5vw'
            />
          </div>
        </>
      )}
    </div>
  );
}
