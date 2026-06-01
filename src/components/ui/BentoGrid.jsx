import { cn } from "../../lib/utils";

export const BentoGrid = ({
  className,
  children
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
        "auto-rows-min",
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
  img,
  imgClassName,
  titleClassName,
  id,
  spareImg,
}) => {
  return (
    <div
      className={cn(
        "group/bento relative overflow-hidden shadow-input row-span-1 flex min-h-72 flex-col justify-between rounded-xl border border-white/20 bg-black p-4 transition duration-200 hover:shadow-xl dark:shadow-none",
        "sm:p-5 md:p-6",
        className
      )}>

      <div className={cn("relative mb-4 h-56 overflow-hidden rounded-2xl", id === 6 && "flex justify-center")}> 
        {img && (
          <img
            src={img}
            alt={title || "grid item image"}
            className={cn("h-full w-full object-cover object-center", imgClassName)}
          />
        )}

        {spareImg && (
          <img
            src={spareImg}
            alt={title || "grid spare image"}
            className={cn(
              "absolute right-0 -bottom-5 max-w-full object-cover object-center",
              id === 4 && "w-full opacity-80",
              className= (imgClassName, 'object-cover object-center')
            )}
          />
        )}
      </div>

      <div
        className={cn(
          "mt-auto mb-2 font-sans font-extrabold text-neutral-600 dark:text-neutral-200",
          titleClassName
        )}>
        {title}
      </div>

      <div className="font-sans text-sm font-normal text-neutral-600 dark:text-neutral-300">
        {description}
      </div>
    </div>
  );
};
