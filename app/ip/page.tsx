import React from "react";
import Image from "next/image";
import ipImage from "../../public/ipimg.png";
import homeArrow from "../../public/homeArrow.png";
import Link from "next/link";
import Sociallinks from "@/components/Sociallinks";
import youtube from "../../public/Youtube Qr.png";
import arrow from "../../public/arrow.png";
import logo from "../../public/blackLogo.png";
import instagram from "../../public/Instagram Qr.png";
const land = () => {
  return (
    <section className="mt-2 flex flex-col items-center  md:flex-row md:justify-around lg:justify-evenly max-sm:ml-4  ">
      <div className="relative flex items-start  ">
        <Image
          src={ipImage}
          alt="ideal events"
          height={550}
          width={350}
          className="rounded-[50px]"
          objectFit="fit"
        />

        <div className="absolute top-5 left-5 ease-in-out duration-300 hover:scale-125 w-4 h-8">
          <Link className=" " href="/">
            <Image src={homeArrow} alt="Ideal events" />
          </Link>
        </div>
      </div>
      {/* right-side */}
      <div className="mt-5 flex flex-col gap-5 p-5 text-2xl items-center ">
        <Link href="/">
          <Image
            src={logo}
            alt="ideal events logo"
            width={200}
            height={80}
            className="duration-300"
          />
        </Link>
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-5 ">
            <Link href="https://www.youtube.com/@idealeventsin">
              <h2 className="font-mont font-bold text-[1.5rem] max-sm:text-[1rem] max-sm:leading-5 ease-in-out duration-300 leading-10 hover:scale-110 whitespace-nowrap lg:text-[2.5rem] ">
                Be a part of our <br />
                Youtube family
              </h2>
              <hr className="w-full border border-[grey] mt-2 rounded-lg" />
            </Link>
            <Link href="https://www.youtube.com/@idealeventsin">
              <Image
                src={youtube}
                alt="social media links"
                width={150}
                height={150}
                className="border border-[grey] rounded-[2.5rem] max-sm:rounded-[10px] max-sm:p-0 p-5 ease-in-out duration-100 hover:scale-105"
              />
            </Link>
          </div>
          <div className="flex items-center gap-5">
            <Link href="https://www.instagram.com/idealphotography.in/">
              <Image
                src={instagram}
                alt="social media links"
                width={150}
                height={150}
                className="border border-black rounded-[2.5rem] max-sm:rounded-[10px] max-sm:p-0 p-5 ease-in-out duration-100 hover:scale-105"
              />
            </Link>
            <Link href="https://www.instagram.com/idealphotography.in/">
              <h2 className="font-mont font-bold text-[1.5rem] max-sm:text-[1rem] max-sm:leading-5 ease-in-out duration-300 leading-10 hover:scale-110 whitespace-nowrap text-right lg:text-[2.5rem]">
                Be a member of <br /> Instagram
              </h2>
              <hr className="w-full border border-[grey] mt-2 rounded-lg" />
              {/* <hr className="w-full  text-black border-[10px]" /> */}
            </Link>
          </div>
        </div>
        <div className="mt-2">
          <Link href="/ip" className="flex">
            <span className="text-xl font-bold text-[#381473] bg-[#C492C5]  p-2 flex gap-3 rounded-xl px-8 items-center ease-in-out duration-500 hover:bg-black hover:text-white ">
              <span>Book a call</span>{" "}
              <Image
                src={arrow}
                alt="arrow"
                className="ease-in duration-75 text-[#381473] group-hover:ml-2 group-hover:scale-110 "
              />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default land;
