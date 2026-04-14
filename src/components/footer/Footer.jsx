import Image from "next/image";
import logo from "../../assets/logo-xl.png";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import { PiCopyrightFill } from "react-icons/pi";

function Footer(){
  return(
    <footer className="bg-[#244D3F] flex flex-col items-center p-5 gap-5 text-white">
      <figure className="w-50 p-1 shadow-md rounded-xs md:w-75 xl:w-xs">
        <Image src={logo} alt="logo image" width={412} height={61} priority className="w-full"/>
      </figure>
      <p className="text-center font-semibold">
        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
      </p>
      <div className="space-y-3">
        <h1 className="text-center font-bold">
          Social Links
        </h1>
        <ul className="flex items-center gap-2">
          <li className="cursor-pointer">
            <figure className="w-8">
              <Image src={instagram} alt="facebook logo" width={40} height={40} priority className="w-full rounded-full shadow-md"/>
            </figure>
          </li>
          <li className="cursor-pointer">
            <figure className="w-8">
              <Image src={facebook} alt="facebook logo" width={40} height={40} priority className="w-full rounded-full shadow-md"/>
            </figure>
          </li>
          <li className="cursor-pointer">
            <figure className="w-8">
              <Image src={twitter} alt="twitter logo" width={40} height={40} priority className="w-ful rounded-full shadow-mdl"/>
            </figure>
          </li>
        </ul>
      </div>
      <hr />
      <div className="flex flex-col items-center gap-2 xl:flex-row xl:gap-100">
        <h1 className="flex items-center gap-1 font-bold tracking-tight">
          <PiCopyrightFill />
          <p>2026 KeenKeeper. All rights reserved.</p>
        </h1>
        <ul className="flex flex-col items-center gap-1 font-semibold tracking-tight xl:flex-row xl:gap-5">
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>Cookies</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;