import ReactPlayer from 'react-player'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Chart} from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { useState } from 'react'

Chart.register(ArcElement);

// Only loads the YouTube player

function Listing() {

  const [rating, setRating] = useState(0);

  const handleStarClick = (value) => {
    setRating(value);
  };

    const uniteco = {
      labels: ['Fixed Costs', 'Web Managment', 'Miscallaneous Expenses'],
        datasets: [
          {
            label: 'Equity % ',
            data: [58, 20, 22],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(25, 206, 86, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(25, 206, 86, 1)',
            ],
            borderWidth: 1
          }
        ]
    }   

    const equity = {
      labels: ['Mr Ramesh', 'Mr.Jayesh', 'Mr.Nagesh'],
        datasets: [
          {
            label: 'Equity % ',
            data: [26, 52, 22],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(25, 206, 86, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(25, 206, 86, 1)',
            ],
            borderWidth: 1
          }
        ]
    };

    const revenue = {
        labels: ['FY-2023/24', 'FY-2022/23', 'FY-2021/22'],
        datasets: [
          {
            label: 'Revenue',
            data: [12000, 7000, 2900],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(25, 206, 86, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(25, 206, 86, 1)',
            ],
            borderWidth: 1
          }
        ]
      };
    
      // Configuration options for the chart
      const options = {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      };

  return (
   <div className='m-5 mt-10 sm:m-10 sm:mt-20 font-montserrat   p-5 sm:p-16 rounded-2xl shadow-2xl'>
      <div className='flex flex-row flex-wrap'>
          <div className='sm:w-4/5 mx-auto shadow-2xl'>
            <ReactPlayer url="https://youtu.be/npAcymuDmeA?feature=shared" width="100%"></ReactPlayer>
          </div>
          <div className='mx-auto sm:w-4/5 mt-10'>
            <div className='text-5xl mx-auto text-center w-full p-3 rounded-2xl'>Financial Indiactors</div>
            <div className='flex flex-row flex-wrap md:justify-around'>
            <div className='p-10 mx-auto'>
                <div className='text-xl text-center'>Last 3 Year's Revenue</div>
                <div className='w-40 mx-auto pt-5'>
                <Doughnut data={revenue}/>
                </div>
            </div>
            <div className='p-10 mx-auto'>
                <div className='text-xl text-center'>Equity Split</div>
                <div className='w-40 mx-auto pt-5'>
                <Doughnut data={equity}/>
                </div>
            </div>
            <div className='p-10 mx-auto'>
                <div className='text-xl text-center'>Unit Economics</div>
                <div className='w-40 mx-auto pt-5'>
                <Doughnut data={uniteco}/>
                </div>
            </div>
            </div>
          </div>
      </div>
      <div>
        <div className='py-2'>
            <div className='text-4xl py-4'>
              Project Description
            </div>
            <div className='py-2'>
              Lorel ipsum lorel ispum lorel ipsum Lorel ipsum lorel ispum lorel ipsum Lorel ipsum lorel ispum lorel ipsumLorel ipsum lorel ispum lorel ipsum Lorel ipsum lorel ispum lorel ipsum
            </div>
        </div>
        <div className='py-2'>
            <div className='text-4xl py-4'>
              Unique Selling Proposition
            </div>
            <div className='py-2'>
              Lorel ipsum lorel ispum lorel ipsum Lorel ipsum lorel ispum lorel ipsum Lorel ipsum lorel ispum lorel ipsumLorel ipsum lorel ispum lorel ipsum Lorel ipsum lorel ispum lorel ipsum
            </div>
        </div>
        <div className='py-2'>
            <div className='text-4xl py-4'>
              Revenue Streams
            </div>
            <div className='py-2'>
              Lorel ipsum lorel ispum lorel ipsum Lorel ipsum lorel ispum lorel ipsum Lorel ipsum lorel ispum lorel ipsumLorel ipsum lorel ispum lorel ipsum Lorel ipsum lorel ispum lorel ipsum
            </div>
        </div>
        <div className='py-2'>
            <div className='text-4xl py-4'>
              Funding Raised
            </div>
            <div className="py-2">
              Lorel ipsum lorel ispum lorel ipsum Lorel ipsum lorel ispum lorel ipsum Lorel ipsum lorel ispum lorel ipsumLorel ipsum lorel ispum lorel ipsum Lorel ipsum lorel ispum lorel ipsum
            </div>
        </div>
        <div>
            <div className="flex flex-row flex-wrap gap-2 justify-center mt-8 space-x-4">
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                Invest
              </button>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded">
                Watch Later
              </button>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Enquire More
              </button>
            </div>
        </div>
        <div>
            <div className="flex items-center justify-center mt-8">
              {[1, 2, 3, 4, 5].map((value) => (
                <button
                  key={value}
                  onClick={() => handleStarClick(value)}
                  className={`${
                    value <= rating ? 'text-yellow-500' : 'text-gray-300'
                  } focus:outline-none text-2xl`}
                >
                  ★
                </button>
              ))}
              <p className="ml-2">{rating} Star</p>
            </div>
        </div>
      </div>
   </div>
  )
}

export default Listing
