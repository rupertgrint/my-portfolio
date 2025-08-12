type Props = {
  title: string;
  num: string;
};

export default function ListTitle({ title, num }: Props) {
  return (
    <>
      <div className='flex justify-start items-baseline border-b border-gray-400 pb-2 my-2 px-1'>
        <span className='text-sm font-bold text-gray-400 pr-3'>{num}</span>
        <div className='text-md'>{title}</div>
      </div>
    </>
  );
}
