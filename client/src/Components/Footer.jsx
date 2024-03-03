import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';
// Reusable SocialIcon component with hover effect
const SocialIcon = ({ icon: Icon }) => (
  <Icon className="social-icon hover:text-[#00df9a]" size={30} />
);
// Footer component
const Footer = () => {
  // Array defining the content and structure of the footer
  const items = [
    // Social media icons
    { type: 'icon', icon: FaFacebookSquare },
    { type: 'icon', icon: FaInstagram },
    { type: 'icon', icon: FaTwitterSquare },
    { type: 'icon', icon: FaGithubSquare },
    { type: 'icon', icon: FaDribbbleSquare },
    // Footer sections
    { type: 'section', title: 'Solutions', items: ['Analytics', 'Marketing', 'Commerce', 'Insights'] },
    { type: 'section', title: 'Support', items: ['Pricing', 'Documentation', 'Guides', 'API Status'] },
    { type: 'section', title: 'Company', items: ['About', 'Blog', 'Jobs', 'Press', 'Careers'] },
    { type: 'section', title: 'Legal', items: ['Claim', 'Policy', 'Terms'] },
  ];
  // JSX structure of the footer
  return (
    <div className='bg-[#000300] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 p-6 md:p-20'>
      {/* Left section with brand and social icons */}
      <div>
        <h1 className='w-full text-3xl lg:text-4xl xl:text-5xl font-bold text-purple-800'>Sifra AI</h1>
        <p className='py-4'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.
        </p>
        <div className='flex justify-between md:w-[75%] my-6'>
          {/* Mapping over social icons and rendering the SocialIcon component */}
          {items.map((item, index) => (
            item.type === 'icon' ? (
              <SocialIcon key={index} icon={item.icon} />
            ) : null
          ))}
        </div>
      </div>
      {/* Right section with footer content organized in sections */}
      <div className='lg:col-span-2 flex justify-between mt-6'>
        {/* Mapping over sections and rendering content */}
        {items.map((item, index) => (
          item.type === 'section' ? (
            <div key={index}>
              <h6 className="font-medium text-gray-100 text-xl">{item.title}</h6>
              <ul>
                {/* Mapping over items in each section */}
                {item.items.map((subItem, subIndex) => (
                  <li key={subIndex} className='py-2 text-sm'>{subItem}</li>
                ))}
              </ul>
            </div>
          ) : null
        ))}
      </div>
    </div>
  );
};
export default Footer;
