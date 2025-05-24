import { FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-[80%] mx-auto flex flex-col md:flex-row justify-between gap-10">
        
        {/* Left: Logo and Description */}
        <div className="flex-1">
          <div className="flex items-center mb-4">
            <img src="/logo.png" alt="Logo" className=" h-10 mr-3" />
            <h2 className="text-2xl font-bold text-green-500">AIOSH</h2>
          </div>
          <p className="text-gray-300">
            SafeTrain is committed to providing expert-led safety training programs tailored for diverse industries. Our mission is to build a culture of safety and preparedness in every workplace.
          </p>
        </div>

        {/* Right: Contact Info */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-green-500 mb-4">Contact Info</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <strong>Location:</strong> Integram University, Behta, Lucknow
            </li>
            <li>
              <strong>Email:</strong> contact@gmail.com
            </li>
            <li>
              <strong>Phone:</strong> +91 93355 21687
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        <p>© {new Date().getFullYear()} AIOSH. All rights reserved.</p>

        {/* Social Media Links */}
        <div className="flex justify-center gap-6 mt-4 text-green-500 text-xl">
          <RiInstagramFill className="hover:text-green-600 transition"/>
          <FaFacebook className="hover:text-green-600 transition"/>
          <FaLinkedin className="hover:text-green-600 transition"/>
          <FaYoutube className="hover:text-green-600 transition"/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
