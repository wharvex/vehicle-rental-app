import type { NextPage } from "next";
import { useEffect } from "react";

type ProfileHamburgerType = {
  onClose?: () => void;
};

const ProfileHamburger: NextPage<ProfileHamburgerType> = ({ onClose }) => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div
      className="relative bg-white w-[400px] overflow-hidden flex flex-col items-center justify-start p-[30px] box-border gap-[10px] [&.animate]:animate-[0.25s_ease_0s_1_normal_forwards_slide-in-right] opacity-[0] h-full max-w-[90%] text-center text-21xl text-black font-reg-heading"
      data-animate-on-scroll
    >
      <div className="self-stretch flex flex-row items-center justify-center py-[50px] px-0 border-b-[1px] border-solid border-black">
        <a className="[text-decoration:none] relative tracking-[0.5px] leading-[100%] font-medium text-[inherit] flex items-center justify-center w-[340px] shrink-0">
          View Profile
        </a>
      </div>
      <div className="self-stretch flex flex-row items-center justify-center py-[50px] px-0">
        <a className="[text-decoration:none] relative tracking-[0.5px] leading-[100%] font-medium text-[inherit] flex items-center justify-center w-[340px] shrink-0">
          Logout
        </a>
      </div>
    </div>
  );
};

export default ProfileHamburger;
