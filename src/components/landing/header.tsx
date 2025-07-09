import Image from "next/image"
const Header = () => {
  return (
    <div className="flex flex-row justify-between items-center">
        <Image src="/logo.png" alt="logo" width={200} height={60}  />
        <div>
            <ul className="flex flex-row gap-9">
                <li>Home</li>
                <li>Products</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Header