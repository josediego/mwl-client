import Link from "next/link";

import { ArrowRight } from "lucide-react";

export default function Sorry() {
  return (
    <div className="w-6/12">
      <div className="mb-[30px] flex">
        <div className="bg-[#EE736B] w-full p-12 rounded-[30px] relative">
          <img
            className="absolute right-0 bottom-0"
            src="/img/info-alert.svg"
            alt=""
          />
          <div className="mb-[30px]">
            <h2 className="text-[#F4F4F4] text-[30px] font-semibold mb-2 leading-tight">
              You are not eligible to join the program
            </h2>
            <p className="text-[#F4F4F4] font-light mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <p className="text-[#F4F4F4] font-semibold mb-2">
              Contact provider
            </p>
            <div className="flex items-center gap-2 mb-2">
              <i data-lucide="smartphone" className="text-[#F4F4F4]"></i>
              <a className="text-[#F4F4F4] font-light" href="#">
                +1 (312) 43-3456
              </a>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <i data-lucide="mail" className="text-[#F4F4F4]"></i>
              <a className="text-[#F4F4F4] font-light" href="#">
                Loremipsumdolor@gmail.com
              </a>
            </div>
            <p className="text-[#F4F4F4] font-light mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div>
            <Link
              href={"/get-started"}
              className="border border-[#242424] bg-[#242424] flex items-center justify-center h-[60px] rounded-[60px] px-[50px] text-[#F4F4F4] relative group hover:bg-[#111111]"
            >
              <span className="font-semibold">Return to questionnaire</span>
              <span className="flex items-center justify-center w-[39px] h-[39px] rounded-full absolute right-[-20px] bg-[#242424] border-[4px] border-[#EE736B] group-hover:bg-[#111111]">
                <ArrowRight className="w-[14px] h-[14px] text-[#F4F4F4]" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
