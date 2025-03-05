import Link from "next/link";
import { FooterData } from "../data/footer";
import { CgGitFork } from "react-icons/cg";
import { IoStar } from "react-icons/io5";

export function Footer() {
  const { dev, actionButton1, actionButton2 } = FooterData;
  return (
    <div className="relative border-t bg-[#0d1224] border-[#353951] text-white">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2  bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">
            {dev.content}{" "}
            <Link target="_blank" href={dev.link} className="text-[#16f2b3]">
              {dev.name}
            </Link>
          </p>
          <div className="flex items-center gap-5">
            <Link
              target="_blank"
              href={actionButton1.link}
              className="flex items-center gap-2 uppercase hover:text-[#16f2b3]"
            >
              <IoStar />
              <span>{actionButton1.value}</span>
            </Link>
            <Link
              target="_blank"
              href={actionButton2.link}
              className="flex items-center gap-2 uppercase hover:text-[#16f2b3]"
            >
              <CgGitFork />
              <span>{actionButton2.value}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
