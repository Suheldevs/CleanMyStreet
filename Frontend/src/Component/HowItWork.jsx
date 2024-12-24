import React from 'react'

function HowItWork() {
  return (
    <div className='text-center pt-10 dark:bg-[url(/tile.jpg)]  dark:text-white py-6' id='how-it-works'>
        <div className='text-2xl font-bold px-2 py-1 text-yellow-400 text-center inline bg-black/80 uppercase  underline-offset-4'>HOW IT WORKS</div>
        <div className='grid grid-cols-2 md:grid-cols-3'>
            <div className='flex flex-col justify-center items-center '>
                <div className=''><img src='./Step-1.png' className='object-cover'/></div>
                <div className='font-bold text-lg md:mt-[-100px] mt-[-40px]'>Step 1</div>
                <div className='px-6'>See a problem</div>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <div className=''><img src='./Step-2.png' className='object-cover'/></div>
                <div className='font-bold text-lg md:mt-[-100px] mt-[-40px]'>Step 2</div>
                <div className='px-6 mt-2 mb-0'>Open the website</div>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <div className=''><img src='./Step-3.png' className='object-cover'/></div>
                <div className='font-bold text-lg md:mt-[-80px] mt-[-40px]'>Step 3</div>
                <div className='px-6 mt-2 mb-0'>Take a picture <br/> Your location is automatically detected</div>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <div className=''><img src='./Step-4.png' className='object-cover'/></div>
                <div className='font-bold text-lg md:mt-[-80px] mt-[-40px]'>Step 4</div>
                <div className='px-6 mt-2 mb-0'>Enter some basic information and submit the report in seconds!</div>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <div className=''><img src='./Step-5.png' className='object-cover'/></div>
                <div className='font-bold text-lg md:mt-[-80px] mt-[-40px]'>Step 5</div>
                <div className='px-6 mt-2 mb-0'> We receives complaint and redirects to the local authority with more details</div>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <div className=''><img src='./Step-6.png' className='object-cover'/></div>
                <div className='font-bold text-lg md:mt-[-80px] mt-[-40px]'>Step 5</div>
                <div className='px-6 mt-2 mb-0'>You can track progress of complaint and see when the matter is resolved</div>
            </div>
        </div>
    </div>
  )
}

export default HowItWork