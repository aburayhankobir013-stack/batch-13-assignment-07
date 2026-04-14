"use client";
import Image from "next/image";
import logo from "../../assets/logo.png";
import Link from "next/link";
import { RiHome2Line } from "react-icons/ri";
import { RiTimeLine } from "react-icons/ri";
import { ImStatsDots } from "react-icons/im";
import { usePathname } from "next/navigation";


function NavBar(){
  const pathname=usePathname();
  return(
    <header className="px-4 py-2 shadow-md">
      <nav className="flex flex-col items-center gap-2 xl:flex-row justify-between">
        <figure>
          <Image src={logo} alt="logo image" width={141} height={31} />
        </figure>
        <ul className="flex items-center gap-2">
          <li>
            <Link href="/" className={`flex items-center gap-1 font-bold px-2 py-1 rounded-xs cursor-pointer shadow-md ${pathname==="/" ? "bg-[#244D3F] text-white":"bg-slate-200"}`}>
              <RiHome2Line />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link href="/timeline" className={`flex items-center gap-1 font-bold px-2 py-1 rounded-xs cursor-pointer shadow-md ${pathname==="/timeline" ? "bg-[#244D3F] text-white":"bg-slate-200"}`}>
              <RiTimeLine />
              <span>Timeline</span>
            </Link>
          </li>
          <li>
            <Link href="/stats" className={`flex items-center gap-1 font-bold px-2 py-1 rounded-xs cursor-pointer shadow-md ${pathname==="/stats" ? "bg-[#244D3F] text-white":"bg-slate-200"}`}>
              <ImStatsDots />
              <span>Stats</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;