import React from 'react'
import { assets } from '../assets/assets'

const Upload = () => {
    return (
        <div className="pb-16">
            {/* Title */}
            <h1 className="mb-8 text-center text-3xl font-semibold bg-clip-text text-transparent 
                bg-linear-to-r from-gray-900 to-gray-500 py-6">
                See the magic. Try now
            </h1>

            {/* Upload Button */}
            <div className="text-center">
                <input type="file" id="upload2" hidden />
                <label 
                    htmlFor="upload2"
                    className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full cursor-pointer 
                    bg-linear-to-r from-violet-600 to-fuchsia-500 hover:scale-[1.04] transition-all duration-500"
                >
                    <img width={20} src={assets.upload_btn_icon} alt="" />
                    <p className="text-white text-sm font-medium">Upload your image</p>
                </label>
            </div>
        </div>
    )
}

export default Upload
