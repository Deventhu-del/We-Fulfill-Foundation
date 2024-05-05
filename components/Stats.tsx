import { Baby, Boxes, HandCoins, Users } from 'lucide-react'

const Stats = () => {
  return (
    <div className='flex flex-wrap max-lg:flex-col w-full h-full bg-white py-32 gap-20 md:gap-32 text-gray-600 justify-center items-center drop-shadow-lg'>
      <div className='flex flex-col justify-center items-center font-[Montserrat]'>
        <h6 className='text-7xl font-light'>100</h6>
        <p className='font-semibold'>PROGRAM</p>
        <Boxes className='text-[#ffc300] h-6 w-6 mt-2'/>
      </div>

      <div className='flex flex-col justify-center items-center font-[Montserrat]'>
        <h6 className='text-7xl font-light'>1,453</h6>
        <p className='font-semibold'>CHILDRENS</p>
        <Baby className='text-[#ffc300] h-6 w-6 mt-2'/>
      </div>

      <div className='flex flex-col justify-center items-center font-[Montserrat]'>
        <h6 className='text-7xl font-light'>570</h6>
        <p className='font-semibold'>CHARITABLE</p>
        <Users className='text-[#ffc300] h-6 w-6 mt-2'/>
      </div>

      <div className='flex flex-col justify-center items-center font-[Montserrat]'>
        <h6 className='text-7xl font-light'>19,658</h6>
        <p className='font-semibold'>DONATION</p>
        <HandCoins className='text-[#ffc300] h-6 w-6 mt-2'/>
      </div>
    </div>
  )
}

export default Stats