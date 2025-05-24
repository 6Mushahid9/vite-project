import { FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook, FaLinkedin } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="w-full bg-green-800 shadow-lg">
      <div className=" sm:w-[80%] mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo + Name */}
        <div className="flex items-center gap-3">
          <div className="bg-white rounded-full p-2">
            <img src="/logo.png" alt="logo" className="h-10 object-contain" />
          </div>
          <span className="text-2xl font-bold text-white">AIOSH</span>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4 text-white text-xl">
          <RiInstagramFill className="hover:text-black transition duration-200" size={35}/>
          <FaFacebook className="hover:text-black transition duration-200" size={30}/>
          <FaLinkedin className="hover:text-black transition duration-200" size={32}/>
          <FaYoutube className="hover:text-black transition duration-200" size={38}/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
