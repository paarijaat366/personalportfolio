import React from 'react'
import { Vortex } from './ui/vortex'

const Hero = () => {
  return (
    <div>
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10 w-full h-[80vh]"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center items-center fadeInUp-animation">
          Building designs that seems Magical
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center items-center fadeInUp-animation">
          Hello! I'm Paarijaat Awasthi. A modern front end developer based in India.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <a href="#section" className='px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset] mt-4 fadeInUp-animation'>
            Show My Work
          </a>
        </div>
      </Vortex>

    </div>
  )
}

export default Hero
