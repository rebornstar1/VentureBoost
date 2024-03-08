import Homecards from './Homecards'
import safeimg from '../assets/image.png'
import feep from '../assets/finance1.jpg'
import jeep from '../assets/finance2.jpg'


function Wwedo() {
  return (
    <div className='bg-gradient-to-r from-gray-900 to-gray-600 font-montserrat p-6 md:p-12'>
      <div className=' text-white text-4xl md:text-6xl font-semibold p-8 md:p-20 text-center'>What we do?</div>
      <div className='flex flex-wrap flex-row justify-center items-center gap-10 mx-auto w-11/12'>
        <Homecards textover="Project Creation Toolkit" ims={safeimg} textin ="We will provide users with a comprehensive toolkit to create and optimize their projects. This toolkit may include guidance on crafting compelling project descriptions, creating engaging multimedia content such as videos and images, setting realistic funding goals, designing attractive rewards for backers, and strategizing effective marketing and promotion strategies. By offering such resources, the platform empowers users to create successful campaigns that resonate with potential backers and increase their chances of reaching funding targets."/>
        <Homecards textover="Backer Engagement" ims={feep} textin ="To facilitate interaction between project creators and backers, crowdfunding platforms can offer various engagement tools. These may include messaging features for direct communication, comment sections for public discussions, and updates functionality to keep backers informed about project milestones, progress, and challenges. Additionally, platforms could provide analytics tools that allow creators to track backer demographics, engagement metrics, and funding trends, enabling them to tailor their communication and marketing efforts effectively."/>
        <Homecards textover="Financial Management" ims={jeep} textin ="Managing finances is a crucial aspect of running a crowdfunding campaign. To assist users in this area, crowdfunding platforms can provide tools and features for financial management. This may include built-in payment processing systems to securely collect and manage funds, transparent fee structures detailing platform fees and payment processing fees, as well as reporting and analytics dashboards to track incoming funds, transaction histories, and any associated fees. Additionally, platforms can offer guidance and marketing efforts effectively."/>
      </div>
    </div>
  )
}

export default Wwedo
