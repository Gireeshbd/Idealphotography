import Link from "next/link";
import React from "react";
import Image from "next/image";
interface socialmediaLinks {
  text: String;
  img: any;
}
const Sociallinks = ({ text, img }: socialmediaLinks) => {
  return (
    <div className="flex">
      <Link href="www.youtube.com">
        <h2>{text}</h2>
      </Link>
      <div className="border border-black rounded-[1.25rem]">
        <Image src={img} alt="Social media QR" />
      </div>
    </div>
  );
};

export default Sociallinks;
