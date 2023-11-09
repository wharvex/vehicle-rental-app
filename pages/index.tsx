import type { NextPage } from "next";
import { useState, useCallback } from "react";
import { useRouter } from "next/router";
import ProfileHamburger from "../components/profile-hamburger";
import PortalDrawer from "../components/portal-drawer";

const Home: NextPage = () => {
  const router = useRouter();
  const [isProfileHamburgerOpen, setProfileHamburgerOpen] = useState(false);

  const onClientLogoComponentContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const openProfileHamburger = useCallback(() => {
    setProfileHamburgerOpen(true);
  }, []);

  const closeProfileHamburger = useCallback(() => {
    setProfileHamburgerOpen(false);
  }, []);

  const onLinkRegularMediumContainerClick = useCallback(() => {
    router.push("/confirm-reservation");
  }, [router]);

  const onBrowseClick = useCallback(() => {
    router.push("/browse-lots");
  }, [router]);

  return (
    <>
      <div className="relative bg-white w-full overflow-hidden flex flex-col items-center justify-start py-2.5 px-36 box-border gap-[10px]">
        <header className="self-stretch box-border h-[193px] overflow-hidden shrink-0 flex flex-row items-center justify-between py-5 px-2.5 border-b-[2px] border-solid border-black">
          <nav className="m-0 flex-1 flex flex-row items-center justify-between">
            <div
              className="flex flex-col items-center justify-center cursor-pointer"
              onClick={onClientLogoComponentContainerClick}
            >
              <img
                className="relative w-[220px] h-[153px] object-cover"
                alt=""
                src="/client-logo@2x.png"
              />
            </div>
            <div className="flex flex-row items-center justify-center">
              <div className="rounded-tl-31xl rounded-tr-none rounded-br-none rounded-bl-31xl box-border w-[326px] h-[58px] flex flex-row items-center justify-start py-[5px] px-[25px] border-t-[1px] border-solid border-black border-b-[1px] border-l-[1px]">
                <input
                  className="[border:none] font-medium font-hfb-extra-small text-13xl bg-[transparent] relative tracking-[0.5px] leading-[100%] text-grey text-left flex items-center w-[300px] shrink-0"
                  placeholder="Search vehicles..."
                  type="text"
                />
              </div>
              <div className="w-[57px] h-[58px] flex flex-col items-center justify-center">
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/search-bar-fragment-12@2x.png"
                />
              </div>
            </div>
            <button 
              className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center"
              onClick={onBrowseClick}
            >
              <div className="box-border w-[214px] h-[82px] flex flex-row items-start justify-start border-[2px] border-solid border-black">
                <div className="self-stretch flex-1 relative text-21xl tracking-[0.5px] leading-[100%] font-medium font-hfb-extra-small text-black text-center flex items-center justify-center">
                  Browse
                </div>
              </div>
            </button>
            <div
              className="flex flex-row items-center justify-center cursor-pointer"
              onClick={openProfileHamburger}
            >
              <img
                className="relative w-[130px] h-[133.3px] object-cover"
                alt=""
                src="/user-icon@2x.png"
              />
            </div>
          </nav>
        </header>
        <main className="self-stretch flex flex-col items-center justify-start gap-[10px] text-center text-45xl text-black font-reg-heading">
          <div className="flex flex-row items-center justify-start">
            <i className="relative tracking-[0.5px] leading-[100%] flex font-medium items-center justify-center w-[433px] h-[337px] shrink-0">
              Home
            </i>
          </div>
          <div
            className="flex flex-row items-center justify-center p-2.5 cursor-pointer text-21xl"
            onClick={onLinkRegularMediumContainerClick}
          >
            <a className="[text-decoration:none] relative tracking-[0.5px] leading-[100%] font-medium text-[inherit]">
              Confirm Reservation
            </a>
          </div>
        </main>
        <div className="self-stretch flex-1 bg-white" />
        <footer className="self-stretch overflow-hidden flex flex-row items-center justify-between py-5 px-2.5 text-center text-13xl text-black font-hfb-extra-small border-t-[2px] border-solid border-black">
          <div className="flex flex-row items-center justify-center p-2.5">
            <div className="relative tracking-[0.5px] leading-[100%] font-medium flex items-center w-[397px] shrink-0">
              <span className="[line-break:anywhere] w-full">
                <p className="m-0">{`© 2023 “Borrow Our Cars” &`}</p>
                <p className="m-0">“:thumbsup: design”</p>
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              className="relative w-44 h-[184px] object-cover"
              alt=""
              src="/imageour-logo1@2x.png"
            />
          </div>
          <div className="flex flex-row items-center justify-center p-2.5">
            <a className="[text-decoration:none] relative tracking-[0.5px] leading-[100%] font-medium text-[inherit] flex items-center justify-center w-[86px] shrink-0">
              About
            </a>
          </div>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center">
            <div className="box-border w-[214px] h-[82px] flex flex-row items-start justify-start border-[2px] border-solid border-black">
              <div className="self-stretch flex-1 relative text-21xl tracking-[0.5px] leading-[100%] font-medium font-hfb-extra-small text-black text-center flex items-center justify-center">
                Support
              </div>
            </div>
          </button>
        </footer>
      </div>
      {isProfileHamburgerOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Right"
          onOutsideClick={closeProfileHamburger}
        >
          <ProfileHamburger onClose={closeProfileHamburger} />
        </PortalDrawer>
      )}
    </>
  );
};

export default Home;
