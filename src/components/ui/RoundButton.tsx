type Props = {
  url?: string;
};

export default function RoundButton({ url }: Props) {
  return url ? (
    <a
      href={url}
      target='_blank'
      rel='noopener noreferrer'
      className='inline-block'
    >
      <button className='border border-foreground dark:border-background dark:text-background rounded-3xl px-3 py-1 bg-transparent text-sm mt-1 transition-all duration-300 ease-in-out hover:shadow-md hover:bg-white hover:bg-opacity-30'>
        More
      </button>
    </a>
  ) : (
    <button className='border border-gray-medium-dark text-gray-medium-dark rounded-3xl px-3 py-1 bg-transparent text-sm mt-1 opacity-50 cursor-default'>
      More
    </button>
  );
}
