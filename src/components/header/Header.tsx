import React from "react";
import {
  GitHubLogoIcon,
  TwitterLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { TabsDemo } from "./TabsDemo";

function Header() {
  return (
    <div className="pt-8  max-w-3xl w-full h-fit">
      <div className="flex flex-col gap-2  justify-start w-full items-start">
        <img
          src="https://i.imgur.com/bGZHUPA.png"
          alt="logo"
          className="w-14 h-14  rounded-full grayscale cursor-pointer"
        />
        <h3 className="font-medium text-gray-900">Ajay Kumar</h3>
        <h4 className="text-gray-500">Engineer & Designer</h4>

        <div className="flex gap-3 mt-4">
          <a href="https://github.com/kumarajay0412" className="flex gap-2">
            <GitHubLogoIcon className="h-6 w-6 shrink-0  transition-transform duration-200 " />
          </a>
          <a href="https://twitter.com/Kumar_ajay0412">
            <TwitterLogoIcon className="h-6 w-6 shrink-0  transition-transform duration-200" />
          </a>
          <a href="https://www.linkedin.com/in/ajay-kumar-a5bb4b193/">
            <LinkedInLogoIcon className="h-6 w-6 shrink-0  transition-transform duration-200" />
          </a>
        </div>
        <hr className="w-full my-4" />
      </div>
      {/* Is Not working properly in safari and ios problem with mix-blend-mode */}
      {/* <div className="flex space-x-1 ">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            onClick={() => {
              router.push(tab.id);
              setActiveTab(tab.id);
            }}
            className={`${
              activeTab === tab.id ? "" : "hover:text-gray-600"
            } relative cursor-pointer  rounded-full px-3 py-1.5 text-sm font-medium text-black   transition-colors focus-visible:outline-2`}
            style={{
              WebkitTapHighlightColor: "transparent",
            }}
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId="bubble"
                className="= !z-[10] block  absolute inset-0   bg-white   safari-mix-blend"
                style={{
                  borderRadius: 6,
                }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            {tab.label}
          </div>
        ))}
      </div> */}

      <TabsDemo />
    </div>
  );
}

export default Header;
