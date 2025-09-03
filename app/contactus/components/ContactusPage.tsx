"use client";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { 
  submitContactUS,
  ContactUsInfo,
  hideSpinner
} from "@/app/services/useraccount.service";

const ContactUsPage = () => {
  const handleGenerateSwot = () => {
         
                              const contactUs ={} as ContactUsInfo;                              
                              const nameE=window.document.getElementById('name') as HTMLTextAreaElement;
                              const emailE=window.document.getElementById('email')as HTMLTextAreaElement;
                              const messageE=window.document.getElementById('message')as HTMLTextAreaElement;
                              contactUs.name=nameE.value;
                              contactUs.email=emailE.value;
                              contactUs.message=messageE.value;
                               
                              submitContactUS(contactUs).then(value => {  
                                if(value)
                                {
                                  alert('Thank you for contacting us.');      
                                }
                                hideSpinner();       
                                nameE.value='';
                                emailE.value='';
                                messageE.value='';                         
                              }).catch(err => {                       
                                console.log(err);
                                hideSpinner();      
                              });
  };
          
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-white px-3 sm:px-8  md:px-3 lg:px-8 py-12 shadow-lg shadow-[rgba(76,175,79,0.49)] rounded-md w-full max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6 py-5">
            <h1 className="text-3xl font-bold text-textThemeClr mb-6">
              Contact Us
            </h1>
            <p className="text-justify text-xl text-gray-500 mb-6 mt-4 w-full md:w-[80%]">
              We value your feedback and inquiries. Whether you have a question
              about our services, need assistance, or simply want to provide us
              with your thoughts, we are here to help.
            </p>
            <h2 className="text-xl font-bold text-themeblackClr mb-3 pt-12 pb-4">
              Get in Touch
            </h2>            
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-textThemeClr text-xl" />
              <span className="text-gray-600 font-medium">
                mail@pangeacons.com
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-textThemeClr text-xl" />
              <span className="text-gray-600 font-medium ">
                Level 03, Boulevard Plaza Tower One, Sheikh Mohammed Bin Rashid
                Boulevard, Downtown Dubai, UAE
              </span>
            </div>
          </div>
          {/* Contact Form */}
          <form method="POST" className="space-y-4 bg-[rgba(254,254,254,0.74)]  border-2 border-gray-300 p-5 rounded-lg">
            <h1 className="text-3xl text-textThemeClr text-center font-bold">
              Send us a message
            </h1>
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-bgthemeClr p-3 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-green-300"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full  bg-bgthemeClr p-3 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-green-300"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                className="w-full bg-bgthemeClr p-3 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-green-300"
                rows={5}
                name="message"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <div className="py-3">
              <button
                type="button"
                onClick={handleGenerateSwot}
                className="w-full p-3 bg-textThemeClr text-white font-bold rounded-md hover:bg-green-600 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
