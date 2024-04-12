import Image from 'next/image';
import Link from 'next/link';

const items = [
  { id: 1, name: 'Home', href: '/' },
  { id: 2, name: 'About', href: '/#' },
  { id: 3, name: 'Service', href: '/#' },
  { id: 4, name: 'Portfolio', href: '/#' },
  { id: 5, name: 'Blog', href: '/#' },
];

export function Navbar() {
  return (
    <div className="bg-transparent p-4 fixed top-0 z-40 w-full">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="w-[10%]">
            <Image src="./logo.svg" alt="Logo" width={100} height={100} />
          </div>
          <nav className="w-[80%] p-4 flex items-center">
            <ul className="flex w-[50%] justify-between space-x-4 text-white">
              {items.map((item) => (
                <li key={item.id}>
                  <Link href={item.href}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="w-[10%]">
            <Link
              className="bg-[#515DEF] w-[149px] p-2 text-center text-white rounded"
              href="/#"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
