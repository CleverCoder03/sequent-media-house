import Image from 'next/image'

const RowAnimImg = ({src, className}) => {
  return (
    <div className={`relative w-42 h-20 lg:h-23 lg:w-48 rounded-xl overflow-hidden bg-neutral-900 ${className || ''}`}>
        <Image src={src} alt="Row Animation Image" fill className="object-cover opacity-85" />
    </div>
  )
}

export default RowAnimImg