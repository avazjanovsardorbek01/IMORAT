"use client";
import { useState } from "react";
import Image from "next/image";
import "boxicons";
import { Logo } from "@/svg";
import Link from "next/link";
import "./main.css";

const Index = () => {
  const [navVisible, setNavVisible] = useState(false);
  const responsiveNav = () => {
    setNavVisible(!navVisible);
  };
  return (
    <>
      {/* HEADER SECTION STARTED */}
      <header className="py-[24px] bg-[#fff] sm:px-[20px]">
        <div className="flex container sm:container-2 items-center justify-between">
          <Image
            className="cursor-pointer logo_animation"
            src={Logo}
            alt="logo"
            style={{
              width: "65px",
              borderRadius: "18px",
            }}
          />

          <ul className="flex sm:hidden gap-[24px] items-center">
            <li>
              <Link
                href="/"
                className="text-[16px] font-[500] border-b-[2px] border-b-transparent hover:border-b-[#000] hover:cursor-pointer transition-all duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/property"
                className="text-[16px] font-[500] border-b-[2px] border-b-transparent hover:border-b-[#000] hover:cursor-pointer transition-all duration-300"
              >
                Property
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-[16px] font-[500] border-b-[2px] border-b-transparent hover:border-b-[#000] hover:cursor-pointer transition-all duration-300"
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-[16px] font-[500] border-b-[2px] border-b-transparent hover:border-b-[#000] hover:cursor-pointer transition-all duration-300"
              >
                Contact us
              </Link>
            </li>
          </ul>

          <div className="flex sm:hidden gap-[24px] items-end">
            <div className="first-div flex items-center gap-[8px]">
              <box-icon name="user-circle"></box-icon>
              <h2 className="text-[16px] font-[500] cursor-pointer">Login</h2>
            </div>

            <div className="first-div flex items-center gap-[8px]">
              <box-icon name="phone"></box-icon>
              <h2 className="text-[16px] font-[500] cursor-pointer">
                (257) 388-6895
              </h2>
            </div>
          </div>

          <i
            onClick={responsiveNav}
            className="bx hidden sm:block text-[#000000c4] text-[25px] cursor-pointer bx-menu"
          ></i>
        </div>
      </header>

      <div
        className={`pb-[25px] pt-[25px] rounded-[5px] items-start justify-start z-20 w-[200px] bg-[#100E2C] flex-col ${
          navVisible ? "flex" : "hidden"
        } sm:absolute top-[70px] right-[5px] items-center gap-[20px]`}
      >
        <div>
          <Link
            href="/"
            className="text-[#fff] font-[400] active:opacity-[0.8] hover:opacity-[1] transition-all duration-200 opacity-[0.8] text-[16px] cursor-pointer"
          >
            Home
          </Link>
        </div>
        <div>
          <Link
            href="/property"
            className="text-[#ffff] font-[400] active:opacity-[0.8] hover:opacity-[1] transition-all duration-200 opacity-[0.8] text-[16px] cursor-pointer"
          >
            Property
          </Link>
        </div>
        <div>
          <Link
            href="/about"
            className="text-[#fff] font-[400] active:opacity-[0.8] hover:opacity-[1] transition-all duration-200 opacity-[0.8] text-[16px] cursor-pointer"
          >
            About us
          </Link>
        </div>
        <div>
          <Link
            href="/contact"
            className="text-[#fff] font-[400] active:opacity-[0.8] hover:opacity-[1] transition-all duration-200 opacity-[0.8] text-[16px] cursor-pointer"
          >
            Contact us
          </Link>
        </div>
      </div>
      {/* HEADER SECTION ENDED */}
    </>
  );
};

export default Index;
