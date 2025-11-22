import React from 'react'
import { assets } from '../assets/assets'

const Steps = () => {
  return (
    <div className="mx-4 lg:mx-44 py-20 xl:py-40">

      {/* Heading */}
      <h1 className="text-center text-3xl md:text-lg:text-4xl mt-4 font-semibold bg-linear-to-r from-gray-900 to-gray-500 bg-clip-text text-transparent">
        Steps to remove background <br className="hidden sm:block" /> image in seconds
      </h1>

      {/* Cards Wrapper */}
      <div className="flex flex-wrap items-start justify-center gap-6 mt-16 xl:mt-24">

        {/* Step 1 */}
        <div className="flex items-start gap-4 bg-white rounded-xl shadow-md p-7 w-full sm:w-[380px] hover:scale-105 transition-all duration-300">
          <img className="w-12 h-12" src={assets.upload_icon} alt="" />
          <div>
            <p className="text-xl font-semibold text-gray-800">Upload image</p>
            <p className="text-sm text-gray-500 mt-1 leading-relaxed">
              This is a demo text, will replace it later. <br /> This is a demo..
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex items-start gap-4 bg-white rounded-xl shadow-md p-7 w-full sm:w-[380px] hover:scale-105 transition-all duration-300">
          <img className="w-12 h-12" src={assets.remove_bg_icon} alt="" />
          <div>
            <p className="text-xl font-semibold text-gray-800">Remove background</p>
            <p className="text-sm text-gray-500 mt-1 leading-relaxed">
              This is a demo text, will replace it later. <br /> This is a demo..
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex items-start gap-4 bg-white rounded-xl shadow-md p-7 w-full sm:w-[380px] hover:scale-105 transition-all duration-300">
          <img className="w-12 h-12" src={assets.download_icon} alt="" />
          <div>
            <p className="text-xl font-semibold text-gray-800">Download image</p>
            <p className="text-sm text-gray-500 mt-1 leading-relaxed">
              This is a demo text, will replace it later. <br /> This is a demo..
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Steps
