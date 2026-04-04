import React from 'react'

const Services = () => {
  return (
    <>
      {/* Title Wrapper */}
      <div className="bg-white text-black">
        <div className='main-container pb-8 lg:pb-12'>
          <h3 className="text-3xl lg:text-5xl font-heading font-bold">
            My Technology In Details
          </h3>
        </div>
      </div>

      {/* Services List */}
      <div className='relative'>

        {/* Card 1 */}
        <div className="bg-black text-white pt-16 lg:pt-20 pb-[40rem] sticky top-4">
          <div className="main-container grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-start">

            {/* Left side */}
            <div className='flex gap-6 lg:gap-8'>
              <span className="text-gray-400 text-lg lg:text-2xl font-heading tracking-wide block mb-4">
                01
              </span>
              <h2 className="text-[8vw] md:text-6xl font-heading font-bold leading-[1]">
                Web Development <br /> MERN Stack
              </h2>
            </div>

            {/* Right side */}
            <div className="flex items-center">
              <p className="text-lg lg:text-xl leading-relaxed text-gray-300">
                I build modern, responsive web applications using the MERN stack
                (MongoDB, Express.js, React.js, Node.js). I focus on creating clean UI,
                scalable backend APIs, and full-stack solutions with smooth performance
                and real-world features.
              </p>
            </div>

          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#E9E9F0] text-black pt-16 lg:pt-20 pb-[23rem] sticky top-[42%]">
          <div className="main-container grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-start">

            {/* Left side */}
            <div className='flex gap-6 lg:gap-8'>
              <span className="text-gray-400 text-lg lg:text-2xl font-heading tracking-wide block mb-4">
                02
              </span>
              <h2 className="text-[8vw] md:text-6xl font-heading font-bold leading-[1]">
                Python <br /> AI / ML
              </h2>
            </div>

            {/* Right side */}
            <div className="flex items-center">
              <p className="text-lg lg:text-xl leading-relaxed">
                I work with Python for machine learning and data analysis using NumPy,
                Pandas, and visualization tools. I enjoy building ML models and learning
                AI concepts to create intelligent applications.
              </p>
            </div>

          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white text-black py-16 lg:py-12 sticky top-[72%]">
          <div className="main-container grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-start">

            {/* Left side */}
            <div className='flex gap-6 lg:gap-8'>
              <span className="text-gray-400 text-lg lg:text-2xl font-heading tracking-wide block mb-4">
                03
              </span>
              <h2 className="text-[8vw] md:text-6xl font-heading font-bold leading-[1]">
                Java <br /> DSA
              </h2>
            </div>

            {/* Right side */}
            <div className="flex items-center">
              <p className="text-lg lg:text-xl leading-relaxed">
                I practice Data Structures and Algorithms in Java to strengthen my
                problem-solving skills and logic building. This improves my foundation
                for software development and prepares me for technical interviews.
              </p>
            </div>

          </div>
        </div>

        {/* Extra Space (important for last card sticky) */}
        <div className="h-[60vh] bg-white"></div>

      </div>
    </>
  )
}

export default Services