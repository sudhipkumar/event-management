import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">About Us</h3>
            <p className="text-gray-400">
              We are dedicated to bringing you the best conference experiences.
              Join us for an unforgettable event filled with insightful talks,
              networking opportunities, and more.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/discussion"
                  className="text-gray-400 hover:text-white"
                >
                  Discussion
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/create-event"
                  className="text-gray-400 hover:text-white"
                >
                  Create Event
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter to stay updated on our latest news and
              offers.
            </p>
            <form className="flex flex-col md:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 mb-4 md:mb-0 md:mr-2 rounded bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between">
          <div className="flex space-x-4">
            <a href="/" className="text-gray-400 hover:text-white">
              <FaFacebook size="1.5em" />
            </a>
            <a href="/" className="text-gray-400 hover:text-white">
              <FaTwitter size="1.5em" />
            </a>
            <a href="/" className="text-gray-400 hover:text-white">
              <FaInstagram size="1.5em" />
            </a>
            <a href="/" className="text-gray-400 hover:text-white">
              <FaLinkedin size="1.5em" />
            </a>
          </div>

          <p className="text-gray-400 mt-4 md:mt-0">
            &copy; {new Date().getFullYear()} Conference Inc. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
