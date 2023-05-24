import Image from 'next/image'

const Logo = () => {
  return (
    <Image
        height={1080}
        width={1920}
        className="h-14 w-auto"
        src="/logo.png"
        alt=""
    />
  )
}

export default Logo