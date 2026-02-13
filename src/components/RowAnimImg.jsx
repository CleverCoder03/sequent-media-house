import Image from 'next/image'

const RowAnimImg = ({src, className}) => {
  return (
    <div className={`relative w-42 h-20 rounded-xl overflow-hidden ${className || ''}`}>
        <Image src={src} alt="Row Animation Image" fill className="object-cover" />
    </div>
  )
}

export default RowAnimImg