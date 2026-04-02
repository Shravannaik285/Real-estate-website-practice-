import { useState, useEffect } from "react"
import { Contact, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';  // 1. Added this import

const navLinks = [
    { href: '/', label: "Home" },        // 2. Changed to match App.jsx paths
    { href: '/about', label: "About" },
    { href: '/properties', label: "Properties" },
    { href: '/contact', label: "Contact" }
]

export const Navigation=()=>{
   
    const[isMobile, setIsMobile]=useState(false);
    const[isHovered,setIsHovered]=useState(false);
    const[isMenu,setIsMenu]=useState(false);

    return (
        <div className="bg-black w-full p-5">
            <nav className={`${isMobile? "flex flex-col":"hidden md:flex"} justify-center gap-10 list-none text-center mb-4 md:mb-0 border border-white/20 rounded-xl px-6 py-6 gap-x-20
    shadow-[0_0_15px_rgba(255,255,255,0.3)] backdrop-blur-sm text-2xl font-stretch-275% font-bold animate-fadeIn`}>
                {navLinks.map((link, index) => (
                    <li key={index}>
                        {/* 3. Changed <a> to <Link> and 'href' to 'to' */}
                        <Link 
                            to={link.href} 
                            onMouseEnter={()=>setIsHovered(true)} 
                            onMouseLeave={()=>setIsHovered(false)} 
                            className={`text-white no-underline hover:text-gray-300 transition-colors ${isHovered? 'hover:text-orange-400' : ''}`}
                            onClick={() => setIsMobile(false)} // Close mobile menu when a link is clicked
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </nav>

        {/* 4. Fixed the comment syntax here so it doesn't show as text on screen */}
        {/* Mobile view for navigation */}
        <div className="flex justify-end md:hidden"> 
        <button  className="md:hidden text-white fixed top-4 left-4 z-50"onClick={() => setIsMobile(!isMobile)} >
            <Menu size={28} />
        </button>
        </div>
    </div>

    )
}
