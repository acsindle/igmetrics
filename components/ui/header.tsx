import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./mobile-menu";

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-10xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
              <Image
                className="w-12 h-12 fill-current"
                src="/images\logo.png"
                width={500}
                height={500}
                alt="IGMetrics"
              />
            </Link>
            
          </div>
          <div className="font-architects-daughter text-3xl mb-2">IGMetrics</div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow"> 
          {/* Desktop sign in links */}
          <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="#section1"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link href="#payments" className="ont-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="https://t.me/IGMetricsBot" className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3">
                  Get Started
                </Link>
              </li>
              <li>
                <Link href="https://t.me/ninthdegree" className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
