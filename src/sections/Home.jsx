import { Navigation } from '@/layout/Navigation';
import { Link } from 'react-router-dom';

export const Home=()=>{
    return(
        <div className="transition duration-150 ease-in-out min-h-screen bg-gray-900">
            {/* Added navigation for context */}
            <div>
                {/* Responsive text size and padding */}
                <h1 className="text-white text-center flex flex-col md:flex-row justify-center items-center text-3xl md:text-5xl font-extrabold p-4 md:p-10 m-2 md:m-4">
                    Find Your <span className="[text-shadow:2px_2px_10px_rgba(0,255,255,0.5)] text-cyan-500 md:ml-3">Dream Home Today</span>
                </h1>
                
                {/* Responsive text and paragraph alignment */}
                <p className="text-gray-300 text-center text-lg md:text-xl font-mono p-4 md:px-20 m-2">
                    Explore verified smart homes, luxury villas, and affordable apartments across top cities.
                    <br/> We help you find the perfect property with trust and transparency.
                </p>
                
                {/* Fixed Image Container to be responsive */}
                <div className="p-4 md:p-10 flex justify-center w-full">
                    <img 
                        src="/Projects/home1.png" 
                        alt="Home 1" 
                        className="w-full max-w-4xl h-auto rounded-xl shadow-2xl object-cover transition-transform duration-500 ease-in-out hover:scale-105" 
                    />
                </div>
                
                {/* Responsive Title */}
                <h3 className='text-center text-white p-6 md:p-10 font-mono text-2xl md:text-4xl'>
                    Explore verified homes in <span className="block md:inline text-cyan-400 font-extrabold mt-2 md:mt-0">TOP LOCATIONS</span>
                </h3>
                
                {/* Responsive Buttons - Stacked on mobile, row on tablet/desktop */}
                <div className="text-white p-6 flex flex-col sm:flex-row justify-center gap-4 sm:gap-10">
                    <button className="border-2 border-white rounded-lg hover:bg-white hover:text-black p-4 text-xl sm:text-2xl transition ease-in duration-300 font-bold">
                        Browse Properties
                    </button>
                    <button className="border-2 border-white rounded-lg hover:bg-white hover:text-black p-4 text-xl sm:text-2xl transition ease-in duration-300 font-bold">
                        Contact Us
                    </button>
                </div>
                
                <br />
            </div>
        </div>
    )
}
