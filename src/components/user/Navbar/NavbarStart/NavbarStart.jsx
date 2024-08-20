import websitelogo from "../../../../assets/websitelogo.webp"
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoGiftOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { AiOutlineShop } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import ModalButton from "../../../../components/shared/Modal/ModalButton"
import UserAuth from "../../UserAuth/UserAuth";

const NavbarStart = () => {

    const [showSidebar, setShowSidebar] = useState(false);
    const [searchValue, setSearchValue] = useState("");

    return (
        <div className="w-full h-[57px] md:h-[82px] bg-black text-white">
            <nav className="w-full max-w-7xl mx-auto h-full px-4 flex justify-between items-center md:gap-8 xl:gap-12">
                <div className="w-full lg:flex-1 flex justify-between lg:justify-start items-center gap-6">
                    <button onClick={() => setShowSidebar(!showSidebar)} className="h-7 lg:hidden flex flex-col justify-center items-center">
                        <span className={`${showSidebar ? "rotate-45 origin-left" : "block"} duration-200 w-7 h-[2px] bg-white mb-[8.18px]`}></span>
                        <span className={`${showSidebar ? "hidden" : "block"} w-7 h-[2px] bg-white`}></span>
                        <span className={`${showSidebar ? "-rotate-45 origin-left" : "block"} duration-200 w-7 h-[2px] bg-white mt-[8.18px]`}></span>
                    </button>
                    <Link to="/" >
                        <img src={websitelogo} alt="website logo" className="w-[100px] h-8 md:w-[125px] md:h-10" />
                    </Link>
                    <button className="text-3xl lg:hidden">
                        <IoSearchOutline className={`text-orange-theme duration-300 ${showSidebar ? "opacity-0" : "opacity-100"}`} />
                    </button>
                    <div className="flex-1 hidden lg:block relative">
                        <input
                            type="text"
                            placeholder="Search"
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            className="w-full h-11 rounded-full pl-4 pr-24 text-black text-lg font-semibold focus:outline-none placeholder:text-black"
                        />
                        {
                            searchValue &&
                            <button onClick={() => setSearchValue("")} className="absolute right-16 top-1/2 -translate-y-1/2 cursor-default">
                                <IoCloseOutline className="text-2xl text-blue-800" />
                            </button>
                        }
                        <button className="absolute right-4 top-1/2 -translate-y-1/2">
                            <BsSearch className="text-2xl text-orange-theme" />
                        </button>
                    </div>
                </div>
                <div className="h-[57px] md:h-[82px] bg-black flex justify-around items-center fixed inset-x-0 bottom-0 lg:static md:gap-6 lg:gap-8 xl:gap-10">
                    <div className="flex flex-col lg:flex-row justify-center items-center gap-1">
                        <div>
                            <IoGiftOutline className="h-6 w-6 md:h-8 md:w-8 text-orange-theme" />
                        </div>
                        <div className="flex flex-col justify-center -space-y-1">
                            <h1 className="text-xs md:text-base md:font-semibold">Offers</h1>
                            <p className="text-sm hidden lg:block">Latest Offers</p>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-center items-center gap-1">
                        <div>
                            <IoCartOutline className="h-6 w-6 md:h-8 md:w-8 text-orange-theme" />
                        </div>
                        <div className="flex flex-col justify-center -space-y-1">
                            <h1 className="text-xs md:text-base md:font-semibold">Cart(0)</h1>
                            <p className="text-sm hidden lg:block">Add Items</p>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-center items-center gap-1">
                        <div>
                            <AiOutlineShop className="h-6 w-6 md:h-8 md:w-8 text-orange-theme" />
                        </div>
                        <div className="flex flex-col justify-center -space-y-1">
                            <h1 className="text-xs md:text-base md:font-semibold">Pre-Order</h1>
                            <p className="text-sm hidden lg:block">Order Today</p>
                        </div>
                    </div>
                    <ModalButton Component={UserAuth} position="top">
                        <div className="flex flex-col lg:flex-row justify-center items-center gap-1">
                            <div>
                                <IoPersonOutline className="h-6 w-6 md:h-8 md:w-8 text-orange-theme" />
                            </div>
                            <div className="flex flex-col justify-center -space-y-1">
                                <h1 className="text-xs md:text-base md:font-semibold">Account</h1>
                                <p className="text-sm hidden lg:block">Register or Login</p>
                            </div>
                        </div>
                    </ModalButton>
                </div>
            </nav>
        </div>
    );
};

export default NavbarStart;