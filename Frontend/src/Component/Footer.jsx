import { FaFacebookF, FaGithub, FaLinkedinIn, FaTimes } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" text-white">
        <div className="h-2 bg-yellow-400 "></div>
      <div className="bg-[url('../public/tile.jpg')] py-8 mx-auto md:px-24 px-6">
        <div className="flex flex-wrap justify-between">
          {/* Left Section */}
          <div className="w-full md:w-1/3">
            <h2 className="text-lg font-bold text-yellow-400">Clean<span className="text-white">MyStreet</span></h2>
            <p className="text-sm mt-2 pe-4">
              Mapping and reporting street problems to the councils responsible
              for fixing them - anywhere in the <span className="text-lg font-bold text-yellow-400 ">Lucknow</span>.
            </p>
          </div>

          {/* Center Section */}
          <div className="w-full md:w-1/3 mt-8 md:mt-0">
            <ul className="space-y-2 text-sm">
              <li className="font-bold">Report a Complaint</li>
              <li>Home</li>
              <li>How It Works</li>
              <li>Recent Complaints</li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/3 mt-8 md:mt-0">
            <div className="bg-black/30 p-4 rounded-md">
              <h3 className="font-bold text-sm">
                We are a charity - donate today to invest in safer, more
                accessible communities.
              </h3>
              <button className="mt-4 px-4 py-2 bg-yellow-500 text-black rounded-md">
                Donate now ❤️
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white pt-4">
          <div className="flex flex-wrap justify-between items-center">
            {/* Bottom Left */}
            <div className="text-sm space-y-1">
              <p>Built by</p>
              <p>
                <span className="font-bold">Mohd Suhel</span> |{" "}
                <span className="font-bold">CleanMyStreet Team</span>
              </p>
            </div>

            {/* Bottom Right */}
            <div className="flex space-x-6 text-lg">
                <a href="https://github.com/Suheldevs"><FaGithub /></a>
                <a href="https://github.com/Suheldevs"><FaLinkedinIn /></a>
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
