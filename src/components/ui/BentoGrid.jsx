import { cn } from "../../lib/utils";

export const BentoGrid = ({
  className,
  children
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className
      )}>
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  img,
  imgClassName,
  titleClassName,
  id,
  spareImg,
  
}) => {
  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border  p-4 transition duration-200 hover:shadow-xl border-white/20 bg-black dark:shadow-none",
        className
      )}>

      <div className={`${id === 6 && "flex justify-center"} h-full`}>
       <div className="">
      {img && (
        <img
        src={img}
        alt={img}
        className={cn("object-cover, object-center, imgClassName w-full h-full")}
        />
      )} </div>
      <div className={`absolute right-0 -bottom-5 ${id===4 && 'w-full opacity-80'}`}>
      {spareImg && (
        <img
        src={spareImg}
        alt={spareImg}
        className={'object-cover, object-center'}
        />
      )}</div>
       </div>
        <div
          className="mt-2 mb-2 font-sans font-extrabold text-neutral-600 dark:text-neutral-200 flex flex-col justify-end">
          {title}
        </div>
       
        <div
          className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
          {description}
        </div>

      </div>
  );
};
