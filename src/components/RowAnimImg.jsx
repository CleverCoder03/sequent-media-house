import Image from "next/image";
import clsx from "clsx";

const RowAnimImg = ({
  src,
  alt = "Row animation image",
  className,
  priority = false,
  sizes = "(max-width: 768px) 168px, 192px",
}) => {
  return (
    <div
      className={clsx(
        "relative w-42 lg:w-48 aspect-2/1 rounded-md overflow-hidden bg-neutral-900",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        quality={80}
        className="object-cover opacity-90 transition-transform duration-500 ease-out hover:scale-105"
      />
    </div>
  );
};

export default RowAnimImg;
