import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useState } from 'react';
import ChatToast from './ChatToast'

const ContactUs = () => {
  const [showToast, setShowToast] = useState(false);
  const handleClickMouseOn=()=>{
    setShowToast(true)
  }
  const handleClickMouseOut =()=>{
    setShowToast(false)
  }

  return (
    <div id="contactUs" className="" >
      <div className="max-w-5xl mx-auto p-8 rounded-lg shadow-lg ">
        <h1 className="text-4xl font-bold text-center text-green-600 mb-8">
          Get in Touch with Us
        </h1>
        <p className="text-center text-lg text-gray-700 mb-10">
          We&apos;re here to help you find the perfect room, PG, or hostel. Feel free to reach out to us!
        </p>

        {/* Contact Information Section */}
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-blue-500 mb-4">Contact Information</h2>
            <ul className="space-y-4">
              <li className="flex items-center text-lg text-gray-600">
                <Phone className="mr-4 text-green-500" />
                +91 12345 67890
              </li>
              <li className="flex items-center text-lg text-gray-600">
                <Mail className="mr-4 text-green-500" />
                support@rentkro.com
              </li>
              <li className="flex items-center text-lg text-gray-600">
                <MapPin className="mr-4 text-green-500" />
                123 Rent Kro Street, Delhi, India
              </li>
            </ul>

            {/* Social Media Links */}
            <div className="mt-8">
              <h2 className="text-2xl font-semibold text-blue-500 mb-4">Follow Us</h2>
              <div className="flex space-x-4">
                <a href="https://facebook.com" className="text-gray-600 hover:text-blue-600 transition duration-300">
                  <FaFacebook size={32} />
                </a>
                <a href="https://twitter.com" className="text-gray-600 hover:text-blue-600 transition duration-300">
                  <FaTwitter size={32} />
                </a>
                <a href="https://instagram.com" className="text-gray-600 hover:text-blue-600 transition duration-300">
                  <FaInstagram size={32} />
                </a>
                <a href="https://linkedin.com" className="text-gray-600 hover:text-blue-600 transition duration-300">
                  <FaLinkedin size={32} />
                </a>
              </div>
            </div>
          </div>

          {/* Chat Support Section */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-500 mb-4">Chat Support</h2>
            <div className="flex items-center justify-center bg-green-50 p-6 rounded-lg shadow-sm">
              <MessageCircle className="mr-4 text-green-500" size={48} />
              <div>
                <p className="text-gray-700 text-lg">
                  Our team is ready to assist you! Start a chat for quick support.
                </p>
                <button className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
                onMouseEnter={handleClickMouseOn}
                onMouseLeave={handleClickMouseOut}>
                  Start Chat
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Show Toast when hovering over chatUs */}
      {showToast && (
        <ChatToast
          // message="Our chat support is under construction"
          onClose={() => setShowToast(false)}
          // position="mt-[400px]"
        />
      )}
      </div>
    </div>
  );
};

export default ContactUs;