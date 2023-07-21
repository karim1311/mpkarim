/* archivo Nav.jsx en carpeta components */ 
import React, { useState } from "react";
import logo from "../img/logo.svg";
import Location from "./Location";


function Nav({data, onCityClick }) {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handlePlaceButtonClick = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    return (
        <>
        {isMenuOpen && 
        <div className="flex justify-between max-h-full" >
            <div className="flex flex-col border-solid border-black">
                <div className="flex flex-col">
                <label className="text-[9px] font-[800]">LOCATION</label>
                <input type="text" value={data.key} className="border-black"/>
                </div>
                <div className="lugares text-[14px]">
                    <Location data={data} onCityClick={onCityClick} />
                </div>
            </div>
            <div>Guest</div>
            <div>Search</div>
        </div>}
        <div className=" card flex justify-between items-center border-b ">
            {/* Left */}
            <div className="h-20 flex">
                <img src={logo} className="object cover -my-10 logo1" />
            </div>
            {/* Right */}
            <div className="flex justify-center items-center relative shadow-sm shadow-gray-400 border rounded-full pr-3">
                <input type="search"
                placeholder=""
                className="py-2.5 w-[20rem] rounded-full outline-0" />
                <div className=" flex justify-between absolute w-full pr-16 pl-6 font-semibold text-gray-600">
                    <button 
                    className="w-full"
                    onClick={handlePlaceButtonClick}
                    >
                    Place
                    </button>
                    <button className="w-full text-gray-600/60 border-1 border-x px-4">Add guests</button>
                </div>
                <div className="p-2 rounded-full mr-2">
                    <span className="material-symbols-outlined text-orange-600">search</span>
                </div>
            </div>
        </div>
        </>
    );
}

export default Nav;