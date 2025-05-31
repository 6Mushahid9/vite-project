import { FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook, FaLinkedin } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="w-full bg-green-800 shadow-lg">
      <div className=" sm:w-[80%] mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo + Name */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-14 h-14 rounded-full overflow-hidden bg-white shadow-md">
            <img src="/logo.jpg" alt="logo" className="w-full h-full object-cover" />
          </div>

          <span className="text-2xl font-bold text-white">AIOSH</span>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4 text-white text-xl">
  <a
    href="https://www.instagram.com/aim__institute0999?igsh=MTMwOWcyZmNjYmV0eg=="
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
  >
    <RiInstagramFill
      className="hover:text-pink-400 transition duration-200"
      size={35}
    />
  </a>
  <a
    href="https://www.facebook.com/share/16eqri7A93/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
  >
    <FaFacebook
      className="hover:text-blue-500 transition duration-200"
      size={30}
    />
  </a>
  {/* <a
    href="https://www.linkedin.com/in/yourprofile"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
  >
    <FaLinkedin
      className="hover:text-blue-600 transition duration-200"
      size={32}
    />
  </a> */}
  <a
    href="https://youtube.com/@aiminstituteofsafetyandhealth?si=pkEm6AdNbEZfMst5"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="YouTube"
  >
    <FaYoutube
      className="hover:text-red-500 transition duration-200"
      size={38}
    />
  </a>
</div>

      </div>
    </nav>
  );
};

export default Navbar;
