type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  outlineClassName?: string;
};

export const Input = (props: Props) => {
  return (
    <div className="relative">
      <div
        className={`rounded-md  text-13px flex items-center transition-all duration-200 ease-in-out border-[1.5px] border-black-200 focus-within:border-blue-500 focus-within:ring-blue-200 focus-within:ring-4 
       ${props.outlineClassName}`}
      >
        <input
          {...props}
          className={`p-2 w-full text-13px placeholder:text-base text-black-900 placeholder:text-black-300 font-medium bg-transparent border-none focus:outline-none h-16 ${props.className}`}
        />
      </div>
    </div>
  );
};
