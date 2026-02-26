import clsx from "clsx";

const RowAnimVid = ({
  src,
  poster, // Optional: image shown while video loads
  className,
  autoPlay = true,
  muted = true,
  loop = true,
}) => {
  return (
    <div
      className={clsx(
        "relative w-42 lg:w-48 aspect-2/1 rounded-md overflow-hidden bg-neutral-900",
        className
      )}
    >
      <video
        src={src}
        poster={poster}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        playsInline // Important for autoplay on mobile Safari
        className="object-cover w-full h-full opacity-90 transition-transform duration-500 ease-out hover:scale-105"
      />
    </div>
  );
};

export default RowAnimVid;