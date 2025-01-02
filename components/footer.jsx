"use client";

import Image from "next/image";
import "boxicons";
import {Instagram,Telegram,Twitter,Facebook} from "@/svg";

const Index = () => {
    return (
        <>
            {/* FOOTER SECTION STARTED */}
            <footer className="bg-[#100E2C] text-[#fff]">
                <div className="container">
                    <div className="py-[60px] sm:py-[40px] border-b-[1px] border-b-[#ffffffb8]">
                        <ul className="flex sm:flex-col sm:px-[20px] sm:gap-[60px] items-start gap-[104px]">
                            <li className="flex flex-col gap-[24px]">
                                <a className="pb-[8px] text-[20px] font-[600]" href="">Opening hours</a>

                                <a className="text-[16px] font-[400] hover:text-[#ffffffcf] duration-200 transition-all" href="">Mon-Fri 08:00AM - 08:00PM</a>
                                <a className="text-[16px] font-[400] hover:text-[#ffffffcf] duration-200 transition-all" href="">Sat-Sun 08:00AM - 08:00PM</a>
                            </li>

                            <li className="flex flex-col gap-[24px]">
                                <a className="pb-[8px] text-[20px] font-[600]" href="">Find Us</a>

                                <a className="text-[16px] font-[400] hover:text-[#ffffffcf] duration-200 transition-all" href="">8911 Tanglewood Ave. <br></br> Capitol Heights, MD 20743</a>
                                <a className="text-[16px] font-[400] hover:text-[#ffffffcf] duration-200 transition-all" href="">(566) 237-4687</a>
                                <a className="text-[16px] font-[400] hover:text-[#ffffffcf] duration-200 transition-all" href="">moinefou@hotmail.com</a>
                            </li>

                            <li className="flex flex-col gap-[24px]">
                                <a className="pb-[8px] text-[20px] font-[600]" href="">Property</a>

                                <a className="text-[16px] font-[400] hover:text-[#ffffffcf] duration-200 transition-all" href="">Apartments</a>
                                <a className="text-[16px] font-[400] hover:text-[#ffffffcf] duration-200 transition-all" href="">Villa’s</a>
                                <a className="text-[16px] font-[400] hover:text-[#ffffffcf] duration-200 transition-all" href="">Houses</a>
                                <a className="text-[16px] font-[400] hover:text-[#ffffffcf] duration-200 transition-all" href="">Commercial</a>
                            </li>

                            <li className="flex flex-col gap-[24px]">
                                <a className="pb-[8px] text-[20px] font-[600]" href="">Links</a>

                                <a className="text-[16px] font-[400] hover:text-[#ffffffcf] duration-200 transition-all" href="">Home</a>
                                <a className="text-[16px] font-[400] hover:text-[#ffffffcf] duration-200 transition-all" href="">Property</a>
                                <a className="text-[16px] font-[400] hover:text-[#ffffffcf] duration-200 transition-all" href="">About</a>
                                <a className="text-[16px] font-[400] hover:text-[#ffffffcf] duration-200 transition-all" href="">Contact</a>
                            </li>

                            <li className="flex flex-col gap-[24px]">
                                <a className="pb-[8px] text-[20px] font-[600]" href="">Newsletter</a>

                                <a className="text-[16px] font-[400] hover:text-[#ffffffcf] duration-200 transition-all" href="">Subscribe to our newletter</a>

                                <div className="bg-[#fff] flex items-center justify-between w-[280px] rounded-[12px] p-[6px]">
                                    <input type="text" className="outline-none w-[150px] text-[#666]" placeholder="Your email" />
                                    <button className="py-[8px] px-[12px] bg-[#0057FF] hover:bg-[#0055ffd9] duration-200 transition-all active:bg-[#0057FF] rounded-[8px]">Subscribe</button>
                                </div>
                            </li>


                        </ul>
                    </div>

                    <div className="py-[20px] sm: flex items-center sm:gap-[10px] sm:justify-start justify-between">
                        <p className="text-[#ffffffb8] sm:text-[10px] sm:px-[20px]">©Copyright Real Estate 2023. Design by Figma.guru</p>

                        <div className="flex items-center sm:gap-[5px] gap-[12px]">
                            <Image className="cursor-pointer" src={Facebook} alt="facebook"/>
                            <Image className="cursor-pointer" src={Twitter} alt="twitter"/>
                            <Image className="cursor-pointer" src={Instagram} alt="instagram"/>
                            <Image className="cursor-pointer" src={Telegram} alt="telegram"/>
                        </div>
                    </div>
                </div>
            </footer>
            {/* FOOTER SECTION ENDED */}
        </>
    );
};

export default Index;
