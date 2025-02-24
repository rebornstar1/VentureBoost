import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';
import React from 'react';

const SocialIcon = ({ icon: Icon }) => (
  <Icon className="social-icon hover:text-blue-300" size={30} />
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
    <div className='bg-gray-950 mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-white p-6 md:p-20 font-montserrat'>
      {/* Left section with brand and social icons */}
      <div>
        <h1 className='w-full text-3xl lg:text-4xl xl:text-5xl font-bold text-white'>Ideafest</h1>
        <p className='py-4'>
        Spark connections and ignite innovation with our business idea sharing app, where entrepreneurs collide in a digital marketplace of creativity and collaboration.
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
              <h6 className="font-medium text-white text-xl">{item.title}</h6>
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
