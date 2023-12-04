import Image from "next/image";
import Logo from "../public/logoeventsIdeal.png";
import bg from "../public/home.png";
import Link from "next/link";
import arrow from "../public/arrow.png";
export default function Home() {
  return (
    <section className="min-h-full w-full bg-[url('../public/home.png')] bg-cover bg-center bg-no-repeat">
      <div className="p-5">
        <Link href="/">
          <Image src={Logo} alt="idealEvents" width={200} height={80} />
        </Link>
        <div className="flex flex-col justify-evenly  min-h-[90vh]">
          <div>
            <div className="text-[#C492C5]   font-mont flex flex-col mt-[3.5rem] max-sm:mt-[0rem]">
              <span className=" whitespace-nowrap text-[2rem] max-sm:text-2xl sm:text-6xl lg:text-[5rem]">
                Capturing Moments
              </span>
              <span className="font-bold text-6xl max-sm:text-[3.5rem] lg:text-[5rem]">
                Creating Memories
              </span>
            </div>
            <div className=" text-white text-[1.25rem] max-sm:text-[1rem] font-mont font-semibold mt-[1rem]  items-center whitespace-break-spaces">
              Wedding . Outdoor . Candid . Birthday
            </div>
          </div>
          <div className="text-white flex flex-col items-center gap-10  md:flex-row max-sm:mt-10">
            <div className="group">
              <Link href="/ip" className="flex ">
                <span className="border border-white p-2 flex gap-3 rounded-xl px-12 ease-in duration-500 hover:bg-white hover:text-black">
                  <span>EXPLORE</span>{" "}
                  <Image
                    src={arrow}
                    alt="arrow"
                    className="ease-in duration-75  group-hover:ml-2 group-hover:scale-110 "
                  />
                </span>
              </Link>
            </div>
            <div className="group">
              <Link href="/ip" className="flex">
                <span className="border border-white p-2 flex gap-3 rounded-xl px-8 hover:bg-white hover:text-[#f231f5]">
                  <span>BOOK A CALL</span>{" "}
                  <Image
                    src={arrow}
                    alt="arrow"
                    className="ease-in duration-75  group-hover:ml-2 group-hover:scale-110 "
                  />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
