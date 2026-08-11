import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

const socialLinks = [
  {
    icon: FaFacebookF,
    hover: "hover:bg-[#1877F2]", // Facebook
  },
  {
    icon: FaInstagram,
    hover: "hover:bg-[#E4405F]", // Instagram
  },
  {
    icon: FaYoutube,
    hover: "hover:bg-[#FF0000]", // YouTube
  },
  {
    icon: FaTwitter,
    hover: "hover:bg-[#1DA1F2]", // Twitter
  },
];

const SocialLinks = () => {
  return (
    <div className="flex gap-4 mt-6">
      {socialLinks.map(({ icon: Icon, hover }, index) => (
        <button
          key={index}
          className={`w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center transition-all duration-300 ${hover}`}
        >
          <Icon className="text-lg" />
        </button>
      ))}
    </div>
  );
};

export default SocialLinks;
