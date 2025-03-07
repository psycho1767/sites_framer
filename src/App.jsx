import { useState, useEffect } from "react";
import Header from "./components/Header";
import MessageBird from "./assets/MessageBird.svg";
import Hodinkee from "./assets/hodinkee.svg";
import Aiaiaiai from "./assets/aiaiaiai.svg";
import Lottiefiles from "./assets/lottiefiles.svg";
import Rarify from "./assets/rarify.svg";
import Mr_marvis from "./assets/mr_marvis.svg";
import Superhuman from "./assets/superhuman.svg";
import Zapier from "./assets/zapier.svg";
import Vector from "./assets/vector.png";
import InputIcon from "./assets/input_icon.svg";
import Stars from "./assets/stars.svg";
import Pattern from "./assets/pattern.svg";
import ImageWin from "./assets/framer-window.webp";
import Canvas_svg from "./assets/canvas_svg.svg";
import Profile from "./assets/profile.png";
import Sun from "./assets/sun.svg";
import Secend_profile from "./assets/secend_pofile.png";
import Arrow from "./assets/arrow.svg";
import Star from "./assets/star.svg";
import Canvas_image from "./assets/canvas_image.webp";
import Publish from "./assets/publish.webp";
import Motion_desktop from "./assets/motion_desktop.webp";
import Motion_tablet from "./assets/motion_tablet.webp";
import Motion_mobile from "./assets/motion_mobile.webp";
import Example_image_one from "./assets/example_image_one.webp";
import Ship_site_style from "./assets/ship_back_image.webp";
import Play from "./assets/play.svg";
import Cursor_icon from "./assets/cursor.svg";
import Slice from "./assets/slice_example.webp";
import Navigate_image from "./assets/navigate_image.webp";
import Scroll_animotion from "./assets/scroll_animotion.webp";
import Image_3D_one from "./assets/3d_image_one.webp";
import Image_3D_second from "./assets/second_3d_image.webp";
import Cms_image from "./assets/cms_image.webp";
import Site_manage_image from "./assets/site_manage.webp";
import Socal_image from "./assets/socals.webp";

function App() {
  const [NavActive, setNavActive] = useState(0);
  const [ImageUrl, setImageUrl] = useState("./assets/motion_mobile.webp");
  const List_text = [
    {
      text: "Iterate at lightning speed. Quickly build unique landing pages or set up dedicated SEO pages to drive traffic to your website. Use built-in analytics or a 3rd party service to track everything.1",
      link: "#1",
    },
    {
      text: "Iterate at lightning speed. Quickly build unique landing pages or set up dedicated SEO pages to drive traffic to your website. Use built-in analytics or a 3rd party service to track everything.2",
      link: "#2",
    },
    {
      text: "Iterate at lightning speed. Quickly build unique landing pages or set up dedicated SEO pages to drive traffic to your website. Use built-in analytics or a 3rd party service to track everything.3",
      link: "#3",
    },
    {
      text: "Iterate at lightning speed. Quickly build unique landing pages or set up dedicated SEO pages to drive traffic to your website. Use built-in analytics or a 3rd party service to track everything.4",
      link: "#4",
    },
    {
      text: "Iterate at lightning speed. Quickly build unique landing pages or set up dedicated SEO pages to drive traffic to your website. Use built-in analytics or a 3rd party service to track everything.5",
      link: "#5",
    },
    {
      text: "Iterate at lightning speed. Quickly build unique landing pages or set up dedicated SEO pages to drive traffic to your website. Use built-in analytics or a 3rd party service to track everything.6",
      link: "#6",
    },
  ];

  function Icon_Ai(Tol) {
    return (
      <div
        className={`${
          Tol == 48 ? "w-[48px] h-[48px] rounded-2xl" : "w-[30px] h-[30px] rounded-lg"
        }  pl-1  bg-linear-to-r from-cirBlueTop/10 to-cirBlueRight/10 flex justify-center items-center`}>
        <img
          loading="lazy"
          className={` ${Tol == 48 ? "w-[30px] h-[30px]" : "w-[20px] h-[20px]"} `}
          src={InputIcon}
          alt="input_icon"
        />
      </div>
    );
  }

  function Title_example({ title, description, color, opacity, wid }) {
    const op = opacity || "1";
    return (
      <div className="absolute top-10 left-10 w-10/12  flex flex-col justify-start items-start gap-2.5 z-40">
        <span style={{ color }} className=" text-[1.5rem] leading-7 font-bold">
          {title}
        </span>
        <span
          style={{ width: wid, color, opacity: op }}
          className=" text-[.9375rem] font-medium leading-5">
          {description}
        </span>
      </div>
    );
  }

  function Icon_arrow({ color, op = 1 }) {
    return (
      <button className="absolute top-10 right-10 cursor-pointer z-50">
        <svg
          width="30"
          height="31"
          viewBox="0 0 30 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_2102_953)">
            <path
              fill={color}
              // className="fill-offmatn"
              d="M15 3.2124C12.5895 3.2124 10.2332 3.92719 8.22899 5.26637C6.22477 6.60555 4.66267 8.50897 3.74022 10.7359C2.81778 12.9629 2.57643 15.4134 3.04668 17.7776C3.51694 20.1417 4.67769 22.3133 6.38214 24.0178C8.08659 25.7222 10.2582 26.883 12.6223 27.3532C14.9865 27.8235 17.437 27.5821 19.664 26.6597C21.8909 25.7372 23.7944 24.1751 25.1335 22.1709C26.4727 20.1667 27.1875 17.8104 27.1875 15.3999C27.1841 12.1686 25.899 9.07067 23.6141 6.78581C21.3292 4.50095 18.2313 3.21581 15 3.2124ZM20.3508 16.0632L16.6008 19.8132C16.4249 19.9891 16.1863 20.0879 15.9375 20.0879C15.6887 20.0879 15.4501 19.9891 15.2742 19.8132C15.0983 19.6373 14.9995 19.3987 14.9995 19.1499C14.9995 18.9011 15.0983 18.6625 15.2742 18.4866L17.4246 16.3374H10.3125C10.0639 16.3374 9.82541 16.2386 9.64959 16.0628C9.47378 15.887 9.37501 15.6485 9.37501 15.3999C9.37501 15.1513 9.47378 14.9128 9.64959 14.737C9.82541 14.5612 10.0639 14.4624 10.3125 14.4624H17.4246L15.2742 12.3132C15.0983 12.1373 14.9995 11.8987 14.9995 11.6499C14.9995 11.4011 15.0983 11.1625 15.2742 10.9866C15.4501 10.8107 15.6887 10.7119 15.9375 10.7119C16.1863 10.7119 16.4249 10.8107 16.6008 10.9866L20.3508 14.7366C20.438 14.8237 20.5071 14.9271 20.5543 15.0409C20.6015 15.1547 20.6257 15.2767 20.6257 15.3999C20.6257 15.5231 20.6015 15.6451 20.5543 15.7589C20.5071 15.8727 20.438 15.9761 20.3508 16.0632Z"
              // fill="red"
              fillOpacity={op}
            />
          </g>
          <defs>
            <clipPath id="clip0_2102_953">
              <rect width="30" height="30" fill="white" transform="translate(0 0.399902)" />
            </clipPath>
          </defs>
        </svg>
      </button>
    );
  }

  const updateImageUrl = () => {
    const width = window.innerWidth;

    if (width < 768) {
      setImageUrl(Motion_mobile);
    } else if (width >= 768 && width < 1280) {
      setImageUrl(Motion_tablet);
    } else {
      setImageUrl(Motion_desktop);
    }
  };

  useEffect(() => {
    updateImageUrl();
    window.addEventListener("resize", updateImageUrl);
    return () => {
      window.removeEventListener("resize", updateImageUrl);
    };
  }, []);
  return (
    <>
      <div className="w-screen">
        <div className="w-full max-w-[100rem] mx-auto my-2.5 min-h-[100dvh] bg-light ">
          <section
            id="hero_section"
            className="relative w-full h-[50.125rem] overflow-hidden backdrop-blur-3xl hero_background flex flex-col justify-between items-center">
            <Header />
            <div></div>
            <div className="w-[50rem] h-[26.5625rem] z-30  flex flex-col justify-between items-center">
              <div className="text-[1.25rem] font-bold flex justify-center items-center gap-2 bg-linear-to-r text-transparent bg-clip-text from-start-linear via-mid-linear to-end-linear hero_background__center relative cursor-default">
                Announcing Framer AI{" "}
                <img loading="lazy" className="w-3.5 h-3.5" src={Vector} alt="vector" />
              </div>
              <div className=" mx-16 text-center text-[4.125rem] font-bold text-hero-center tracking-[-2.5008px] leading-16 cursor-default">
                Start your dream site with AI. Zero code, maximum speed.
              </div>
              <div className="relative w-[50rem] h-[6.875rem] bg-transparent rounded-[36px] shadow-input">
                <div className=" absolute inset-2.5 bg-linear-to-b from-light/80 to-light rounded-3xl flex justify-center items-center ">
                  <div className="flex justify-between items-center m-5 w-full gap-8">
                    <div className="flex justify-start items-center gap-3 flex-1 h-full ">
                      {Icon_Ai(48)}
                      <input
                        className="w-full h-10 text-matn/70 border-none outline-none"
                        type="text"
                        placeholder="An iOS to-do app startup called Magic"
                      />
                    </div>
                    <button className="relative overflow-hidden shadow-md  group w-[11.0625rem]  h-14 flex justify-center items-center text-light text-[1.25rem] font-semibold rounded-[14px] cursor-pointer bg-linear-to-r from-linerBlue via-mid-linear to-end-linear duration-500 hover:scale-[1.1]">
                      <img
                        loading="lazy"
                        className="absolute group-hover:scale-[3.5] group-hover:rotate-[185deg] duration-500 scale-0 z-50"
                        src={Pattern}
                        alt="patter"
                      />
                      <img loading="lazy" src={Stars} alt="Stars" />
                      Start with AI
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-[5.0625rem] flex flex-col justify-center items-center gap-3 mb-2">
              <div className=" w-full flex justify-center items-center text-[.9375rem] text-light/70 font-medium">
                Large <span className=" text-light">&nbsp;businesses&nbsp;</span> already run their
                site on Framer
              </div>
              <div className="w-11/12 box-border  flex-1 flex justify-between items-center ">
                <img
                  loading="lazy"
                  className="hero_background__footer "
                  src={MessageBird}
                  alt="MessageBird"
                />
                <img
                  loading="lazy"
                  className="hero_background__footer "
                  src={Rarify}
                  alt="Rarify"
                />
                <img
                  loading="lazy"
                  className="hero_background__footer "
                  src={Zapier}
                  alt="Zapier"
                />
                <img
                  loading="lazy"
                  className="hero_background__footer "
                  src={Superhuman}
                  alt="Superhuman"
                />
                <img
                  loading="lazy"
                  className="hero_background__footer "
                  src={Lottiefiles}
                  alt="Lottiefiles"
                />
                <img
                  loading="lazy"
                  className="hero_background__footer "
                  src={Aiaiaiai}
                  alt="Aiaiaiai"
                />
                <img
                  loading="lazy"
                  className="hero_background__footer "
                  src={Mr_marvis}
                  alt="Mr_marvis"
                />
                <img
                  loading="lazy"
                  className="hero_background__footer "
                  src={Hodinkee}
                  alt="Hodinkee"
                />
              </div>
            </div>
          </section>

          <section
            id="window"
            className="w-full h-[52.1875rem]  relative bg-light  window_section overflow-hidden backdrop-blur-3xl flex flex-col ">
            <div className="w-full flex-1 z-10 bg-transparent backdrop-blur-2xl flex justify-center items-center">
              <div className="w-[75rem] h-[43.125rem] relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-win">
                <div className="absolute inset-1 rounded-xl  border border-light/20">
                  <img loading="lazy" src={ImageWin} alt="ImageWin" />
                </div>
              </div>
            </div>
          </section>

          <section
            id="canvas"
            className="w-full h-[55rem]  relative overflow-hidden cursor-default  ">
            <div className="absolute bottom-[6.625rem] left-[-22.875rem] border-[3px] border-canvas-pink w-[30.0625rem] h-[16.9375rem] ">
              <div className=" absolute left-[-2px] top-[-25px] text-sm font-semibold text-matn/80">
                Article
              </div>

              <img loading="lazy" className="" src={Canvas_image} alt="Canvas_image" />
            </div>

            <div className="w-32 h-32 absolute left-[11.4375rem] bottom-[4.0625rem] border-[3px] border-linerBlue">
              <div className=" absolute left-[-2px] top-[-25px] text-sm font-semibold text-linerBlue">
                SVG
              </div>
              <div className=" left-[-7px] top-[-7px] canvas__svg__dire border-linerBlue"></div>
              <div className=" left-[-7px] bottom-[-7px] canvas__svg__dire border-linerBlue"></div>
              <div className=" right-[-7px] top-[-7px] canvas__svg__dire border-linerBlue"></div>
              <div className=" right-[-7px] bottom-[-7px] canvas__svg__dire border-linerBlue"></div>
              <img loading="lazy" src={Star} alt="Star" />
            </div>

            <div className="absolute bottom-[6.25rem] left-1/2 translate-x-[-50%] w-[13.625rem] h-[4.1875rem] border-[3px] border-canvas-pink">
              <div className=" absolute left-[-2px] top-[-25px] text-sm font-semibold text-canvas-pink">
                Button Component
              </div>
              <div className=" left-[-7px] top-[-7px] canvas__svg__dire border-canvas-pink"></div>
              <div className=" left-[-7px] bottom-[-7px] canvas__svg__dire border-canvas-pink"></div>
              <div className=" right-[-7px] top-[-7px] canvas__svg__dire border-canvas-pink"></div>
              <div className=" right-[-7px] bottom-[-7px] canvas__svg__dire border-canvas-pink"></div>
              <button className="w-full h-full rounded-[14px] bg-start-org text-white text-2xl font-semibold leading-6 flex justify-center items-center gap-4 cursor-pointer">
                <img loading="lazy" src={Arrow} alt="arrow" />
                <span>Start Today</span>
              </button>
            </div>

            <div className="absolute bottom-[-7px] right-[3.125rem] w-[20.5rem] h-[12.8125rem] border-[3px] border-canvas-pink flex flex-col ">
              <div className=" absolute left-[-2px] top-[-25px] text-sm font-semibold text-canvas-pink">
                CMS Tweet
              </div>
              <div className="relative w-full flex-1 rounded-2xl shadow-md border-white/5">
                <div className="absolute top-[1.875rem] right-[2.5625rem] w-[15.3125rem] h-[3.125rem] flex justify-start items-end gap-3.5 ">
                  <img
                    loading="lazy"
                    width={50}
                    height={50}
                    src={Secend_profile}
                    alt="Secend_profile"
                  />
                  <span className="text-[1.0625rem] text-[#555555] leading-8 flex flex-col justify-end items-start">
                    <span className="h-6 text-black">Kevin</span>
                    <span className="h-6">@kvncnls</span>
                  </span>
                </div>
                <div className="absolute bottom-[30px] right-[22px] w-[16.375rem] h-[4.4375rem] text-matn text-[1.3125rem] leading-[2.1875rem] break-words  ">
                  It’s like @Figma but you’re actually building the site.
                </div>
              </div>
            </div>

            <div className="absolute top-[26.5625rem] right-[-13.5rem] border-[3px] border-canvas-pink bg-canvas-svg-background w-[17.0625rem] h-[11.25rem] flex justify-center items-center ">
              <div className=" absolute left-[-2px] top-[-25px] text-sm font-semibold text-canvas-pink">
                Lottie
              </div>

              <img loading="lazy" className="h-40" src={Sun} alt="Sun" />
            </div>

            <div className="absolute top-[-3.5625rem] left-[-11rem] w-[19.75rem] h-[21.625rem] border-[3px] border-canvas-pink flex flex-col ">
              <div className="relative w-full flex-1 rounded-2xl shadow-md border-white/5">
                <div className="absolute top-[1.875rem] right-[2.5625rem] w-[15.3125rem] h-[3.125rem] flex justify-start items-end gap-3.5 ">
                  <img loading="lazy" width={50} height={50} src={Profile} alt="profile" />
                  <span className="text-[1.0625rem] text-[#555555] leading-8">@ BuildwithOmar</span>
                </div>
                <div className="absolute bottom-[30px] right-[22px] w-[16.5rem] h-[13.375rem] text-matn text-[1.3125rem] leading-[2.1875rem]   ">
                  Framer is like @Figma but for designing and publishing real responsive websites.
                  Webflow uses the.. traditional web builder workflow.
                </div>
              </div>
            </div>

            <div className="absolute left-[21.9375rem] w-[23.5625rem] h-[7.75rem] border-[.1875rem] border-linerBlue  ">
              <div className=" left-[-7px] top-[-7px] canvas__svg__dire border-linerBlue"></div>
              <div className=" left-[-7px] bottom-[-7px] canvas__svg__dire border-linerBlue"></div>
              <div className=" right-[42px] top-[-7px] canvas__svg__dire border-linerBlue"></div>
              <div className=" right-[42px] bottom-[-7px] canvas__svg__dire border-linerBlue"></div>
              <div className="absolute inset-[1.875rem] flex flex-col justify-center items-center">
                <span className="w-full text-[.875rem] text-perpule-matn font-bold leading-[17px] ">
                  FROM DESIGN TO REAL SITE
                </span>
                <span className="text-matn text-[1.75rem] font-semibold leading-8 tracking-[-1px]">
                  Straight from the canvas
                </span>
              </div>
            </div>

            <div className="absolute -top-[10.45rem] right-[12.5rem] w-[21.125rem] h-[15.25rem] border-[3px] border-canvas-pink flex flex-col ">
              <div className="relative w-full flex-1 rounded-2xl shadow-md border-white/5">
                <div className="absolute bottom-[30px] left-1/2 translate-x-[-50%] w-[17.4375rem] h-[4.4375rem] text-matn text-[1.3125rem] leading-[2.1875rem]   ">
                  Figma or Sketch, it is pretty easy to get started.
                </div>
              </div>
            </div>

            <div className="absolute top-[6.0938rem] right-[.9688rem] w-[9.3125rem] h-[9.0625rem] border-[3px] border-linerBlue">
              <div className=" absolute left-[-2px] top-[-25px] text-sm font-semibold text-linerBlue">
                Graphic
              </div>
              <div className=" left-[-7px] top-[-7px] canvas__svg__dire border-linerBlue"></div>
              <div className=" left-[-7px] bottom-[-7px] canvas__svg__dire border-linerBlue"></div>
              <div className=" right-[-7px] top-[-7px] canvas__svg__dire border-linerBlue"></div>
              <div className=" right-[-7px] bottom-[-7px] canvas__svg__dire border-linerBlue"></div>
              <img loading="lazy" src={Canvas_svg} alt="Canvas_svg" />
            </div>

            <div className="w-[60rem] h-[16.25rem] absolute top-[15.375rem] left-1/2 translate-x-[-50%] flex flex-col border border-linerBlue border-dashed  ">
              <span className="canvas__center__headers">
                Design sites on a freeform canvas. Add animations, interactions and a CMS.
              </span>
            </div>
          </section>

          <section
            id="publish"
            className="relative w-full h-[52.25rem] bg-cover bg-top flex justify-center items-center">
            <img
              loading="lazy"
              className="w-full h-full absolute top-0 left-0 object-cover"
              src={Publish}
              alt="Publish"
            />
            <div className="flex flex-col justify-center items-center gap-11 z-10">
              <div className="cursor-default w-[46.5rem] h-[15.625rem] text-[4.75rem] leading-[5rem] tracking-[-3px] text-center font-semibold bg-radial from-text-radial to-white text-transparent bg-clip-text ">
                Ready to go live? ‌Just hit publish — no rebuilding, no code.
              </div>
              <button className="cursor-pointer w-[18.125rem] h-[6.875rem] text-[3.75rem] duration-300 hover:shadow-[0px_0px_30px_var(--color-linerBlue)] text-white/80 hover:text-white font-bold leading-16 tracking-tight border border-white/20 bg-radial from-publish-radial to-linerBlue hover:bg-radial rounded-[27px]  ">
                Publish
              </button>
            </div>
          </section>

          <section
            id="breakpoint"
            className="relative w-full h-[85rem] overflow-hidden cursor-default">
            <div className="absolute w-[62.5rem] h-[30.5625rem] top-[8.75rem] left-1/2 -translate-x-1/2 flex flex-col justify-between items-start   ">
              <div className="w-[51.25rem] h-[10rem] text-matn text-[5rem] leading-20 tracking-[-3px]">
                Build sites of any size, solo or with your team.
              </div>
              <div className="w-[45rem] h-[2.75rem] bg-navbg rounded-xl flex justify-start items-center  p-1">
                {["Personal", "Freelancers", "Agencies", "Marketing", "Startups", "Scaleups"].map(
                  (item, inx) => {
                    return (
                      <div
                        key={inx}
                        onClick={() => {
                          setNavActive(inx);
                        }}
                        className={`w-[7.375rem] h-[2.25rem] break_point__nav ${
                          NavActive == inx && "break_point__nav__active_item"
                        }`}>
                        {item}
                      </div>
                    );
                  }
                )}
              </div>
              <div className="w-[62.5rem] h-[12.8125rem] flex flex-col items-start justify-between">
                <span className="w-[42.725rem] text-[1.625rem] leading-10 font-semibold text-matn-gray">
                  {List_text[NavActive].text}
                </span>
                <a
                  href={List_text[NavActive].link}
                  className="text-linerBlue text-[26px] leading-10 font-semibold">
                  Learn more
                </a>
              </div>
            </div>

            <div className="absolute bottom-[-19px] left-[16.5rem] xl:w-[47.25rem] xl:h-[42.5rem] md:w-[29.3125rem] md:h-[42.5rem] sm:w-[17rem] sm:h-[45.25rem] ">
              <a href="#">
                <img loading="lazy" src={ImageUrl} alt="Motion_desktop" />
              </a>
            </div>
          </section>

          <section id="example" className="w-full h-[191.75rem]  flex flex-col">
            <div className="relative w-full h-[25.5rem] ">
              <div className="absolute w-[62.5rem] h-[10.5rem] bottom-10 left-1/2 translate-x-[-50%]">
                <div className="w-full text-matn text-[5rem] font-semibold leading-20 tracking-[-3px]">
                  Powerfully simple.
                </div>
                <div className="w-[50.5625rem] text-matn-gray text-[1.625rem] leading-10 font-semibold">
                  Framer makes building professional sites easy, fast and fun while delivering
                  best-in-class SEO, performance, and hosting.
                </div>
              </div>
            </div>

            <div className=" relative w-full flex-1   ">
              <div className="absolute inset-10 flex flex-col justify-start items-center gap-5  ">
                <div className="w-full relative flex-1 flex flex-col ">
                  <div className="example__item_bg w-full flex-1">
                    <div className="absolute inset-1 bg-linear-to-r from-linerBlue via-mid-linear to-end-linear rounded-[20px] overflow-hidden">
                      <div className="absolute w-full  h-[6.625rem] bottom-0 bg-linear-to-t from-bot-shadow to-transparent rounded-b-[20px] z-50"></div>
                      <Icon_arrow color="white" op="0.7" />
                      <Title_example
                        title="Start with AI"
                        description="Generate a beautiful first version of your site, then go in and customize."
                        color="#FEFEFE"
                        opacity="1"
                        wid="17.3125rem"
                      />
                      <div className="absolute inset-x-10 top-10 min-h-[30.75rem] flex flex-col justify-start items-start gap-10 cursor-default ">
                        <div className="w-[18rem] h-[5.25rem]"></div>
                        <img
                          loading="lazy"
                          className="w-full h-[37.4375rem] rounded-xl opacity-60"
                          src={Example_image_one}
                          alt="Example_image_one"
                        />
                      </div>

                      <div className="absolute left-1/2 -translate-x-1/2 w-[31.25rem] h-[9.8125rem] top-[9.6875rem] rounded-[.9375rem] bg-light shadow-(--shadow-win)  ">
                        <div className="absolute inset-4  flex flex-col gap-4 justify-start items-center">
                          <div className="relative w-full h-11  border-b border-matn-gray/10 flex justify-between items-start gap-4">
                            <div className="w-8 h-8">{Icon_Ai(30)}</div>
                            <button className="z-30 relative w-[4.125rem] h-[1.875rem] bg-linear-to-r from-bot-shadow via-mid-linear to-btn-end rounded-lg flex justify-center items-center gap-0.5">
                              <img
                                loading="lazy"
                                className="w-[22px] h-[22px]"
                                src={Stars}
                                alt="Stars"
                              />
                              <span className="text-[12px] font-semibold text-white">Start</span>
                            </button>
                            <div className="example__item__first_btn_shadow_after"></div>
                            <div className="secend_after"></div>
                          </div>
                          <div className="w-full text-[14px] font-medium leading-5">
                            A recipe site for professional chef Abi Roman. Use vivid colors and
                            modern type. Give an overview of recipies in a grid.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full relative flex-1 flex justify-between items-center gap-5 ">
                  <div className="w-[59.411764705882355%] h-[31.25rem] example__item_bg">
                    <div className="overflow-hidden absolute inset-1 rounded-[20px] bg-radial from-center-radial/70 to-white/40 backdrop-blur-lg">
                      <Icon_arrow color="var(--color-offmatn)" op="0.7" />
                      <Title_example
                        title="Design & Layout"
                        description="Use positioning options to fix topbars, sidebars, badges, and backgrounds."
                        color="--var(--color-matn)"
                        opacity=".8"
                        wid="17.3125rem"
                      />
                      <div className="absolute inset-10 flex flex-col justify-start items-start gap-10 ">
                        <div className="w-full flex-1 flex flex-col gap-8 ">
                          <div className="w-1 h-[5.625rem]"></div>
                          <div className="w-full text-center p-3 text-hero-center text-[3.75rem] leading-16 tracking-[-3px] font-bold ">
                            Ship sites with style
                          </div>
                          <div className="relative border-[3px] border-linerBlue">
                            <img
                              loading="lazy"
                              className="absolute left-1/2 top-1/2 -translate-1/2"
                              src={Play}
                              alt="Play"
                            />
                            <img
                              loading="lazy"
                              className="absolute top-[3.125rem] left-[5.1875rem]"
                              src={Cursor_icon}
                              alt="Cursor_icon"
                            />
                            <div className=" left-[-7px] top-[-7px] canvas__svg__dire border-linerBlue"></div>
                            <div className=" left-[-7px] bottom-[-7px] canvas__svg__dire border-linerBlue"></div>
                            <div className=" right-[-7px] top-[-7px] canvas__svg__dire border-linerBlue"></div>
                            <div className=" right-[-7px] bottom-[-7px] canvas__svg__dire border-linerBlue"></div>
                            <img loading="lazy" src={Ship_site_style} alt="Ship_site_style" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 h-[31.25rem] example__item_bg">
                    <div className="absolute inset-1 bg-linear-240 from-linerBlue to-example-blue rounded-[1.25rem] overflow-hidden">
                      <Icon_arrow color="white" op="0.7" />
                      <Title_example
                        title="Figma Plugin"
                        description="Copy and paste your web designs from Figma to Framer."
                        color="white"
                        opacity="1"
                        wid="17.125rem"
                      />
                      <img
                        loading="lazy"
                        className="absolute left-[1.5008px] top-[10.1875rem]"
                        src={Slice}
                        alt="Slice"
                      />
                    </div>
                  </div>
                </div>

                <div className="w-full relative flex-1 flex flex-row-reverse justify-between items-center gap-5 ">
                  <div className="w-[59.411764705882355%] h-[31.25rem]  example__item_bg">
                    <div className="absolute inset-1  bg-linear-30 from-effect-pink to-effect-purpel/65   rounded-[1.25rem] overflow-hidden">
                      <Icon_arrow color={"white"} op={".5"} />
                      <Title_example
                        title={"Effects"}
                        wid={"18.4375rem"}
                        color={"white"}
                        opacity={".8"}
                        description={
                          "Use powerful Scroll and Appear effects like Transforms and Parallax scrolling."
                        }
                      />

                      <div className="absolute left-[-7.25rem] bottom-[-9.6875rem] w-[21.0625rem] h-[21.0625rem] rounded-full  bg-zereshk shadow-(--shadow-effect-cir)"></div>
                      <div className="absolute top-[7.125rem] right-[-9.6875rem]   w-[17.4375rem] h-[17.4375rem] rounded-full  bg-white/30 shadow-(--shadow-effect-cir)"></div>
                      <div className="absolute top-[10.625rem] right-[10.625rem] w-2.5 h-2.5 rounded-full  bg-[#DB84FE] shadow-(--shadow-effect-cir)"></div>
                      <div className="absolute left-[5.9375rem] bottom-[3.1875rem] w-2.5 h-2.5 rounded-full  bg-[#CBEBEA] shadow-(--shadow-effect-cir)"></div>

                      <div className="absolute left-[3.375rem] top-[11.875rem] bg-linear-to-r from-white/41 via-white/95 to-white bg-clip-text text-transparent text-[6.75rem] leading-[6.75rem] tracking-[-0.225rem] font-black ">
                        NO CODE
                      </div>
                      <div className="absolute left-[3.375rem] top-[18.75rem] bg-linear-to-r from-[#E77DFF] via-white/95 to-white bg-clip-text text-transparent text-[6.75rem] leading-[6.75rem] tracking-[-0.225rem] font-black ">
                        EFFECTS
                      </div>

                      <img
                        loading="lazy"
                        className="absolute top-[11rem] left-[-3.5625rem] w-[10rem] h-[10.3125rem] "
                        src={Image_3D_one}
                        alt="Image_3D_one"
                      />
                      <img
                        loading="lazy"
                        className="absolute top-[288px] right-[-58px] w-[120px] h-[120px] "
                        src={Image_3D_second}
                        alt="Image_3D_second"
                      />
                      <img
                        loading="lazy"
                        className="absolute bottom-8 left-[35.1875rem] w-[16.8125rem] h-[13.8125rem]"
                        src={Scroll_animotion}
                        alt="Scroll_animotion"
                      />
                    </div>
                  </div>
                  <div className="flex-1 h-[31.25rem] example__item_bg">
                    <div className="absolute inset-1 bg-linear-45 from-linerBlue to-publish-radial rounded-[1.25rem] overflow-hidden">
                      <Icon_arrow color="white" op="0.7" />
                      <Title_example
                        title="Navigation"
                        description="Visually structure your pages and link to them easily."
                        color="white"
                        opacity=""
                        wid="15.25rem"
                      />
                      <div className="absolute left-10 top-[9.375rem] flex justify-start items-start gap-[2.3125rem]">
                        <span className="text-white text-[5rem] leading-[5rem] tracking-[-3px]  font-black">
                          Default
                        </span>
                        <span className="text-white/60 text-[5rem] leading-[5rem] tracking-[-3px]  font-black after:table after:content-[''] after:w-full after:h-1 after:bg-white/60">
                          Hover
                        </span>
                      </div>
                      <img
                        loading="lazy"
                        className="absolute left-1/2 -translate-x-1/2 -bottom-[1.8125rem] w-[16.25rem] h-[15.6875rem] shadow-2xs"
                        src={Navigate_image}
                        alt="Navigate_image"
                      />
                      <div className="absolute w-full  h-[80px] bottom-0 bg-linear-to-t from-bot-shadow to-transparent rounded-b-[20px] z-50"></div>
                    </div>
                  </div>
                </div>

                <div className="w-full relative flex-1 flex justify-between items-center gap-5 ">
                  <div className="w-[59.411764705882355%] h-[31.25rem] example__item_bg">
                    <div className="overflow-hidden absolute inset-1 rounded-[20px] ">
                      <div className="absolute w-full h-[10.625rem] bg-linear-25 from-cms-pink to-effect-purpel backdrop-blur-lg"></div>
                      <Icon_arrow color="white" op="0.7" />
                      <Title_example
                        title="CMS"
                        description="Run a blog, list job openings, or manage your event schedule."
                        color="white"
                        opacity="1"
                        wid="14.25rem"
                      />
                      <div className="bg-white shadow-[0px_10px_40px_0px_rgba(0,0,0,.35)]  flex justify-center items-start absolute top-[10.1875rem] left-1/2 -translate-x-1/2 w-[103%] h-[23.5rem]">
                        <img
                          loading="lazy"
                          className="w-[91.55%]"
                          src={Cms_image}
                          alt="Cms_image"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 h-[31.25rem] example__item_bg">
                    <div className="absolute inset-1 -bg-linear-45 from-sabz-kam to-abi-kam rounded-[1.25rem] overflow-hidden">
                      <Icon_arrow color="white" op="0.7" />
                      <Title_example
                        title="SEO"
                        description="Build lightning-fast, globally optimized sites."
                        color="white"
                        opacity="1"
                        wid="12.1875rem"
                      />
                      <div className="w-max h-[13.125rem] absolute top-[12.5625rem] flex gap-10 justify-between items-center left-1/2 -translate-x-1/2   ">
                        <div className="seo_cir seo_cir_off ">95</div>
                        <div className="seo_cir ">100</div>
                        <div className="seo_cir seo_cir_off">98</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full relative flex-1 flex flex-row-reverse justify-between items-center gap-5 ">
                  <div className="w-[59.411764705882355%] h-[31.25rem]  example__item_bg">
                    <div className="absolute inset-1  -bg-linear-45 from-end-abi via-[#157AFF]  to-end-banafsh   rounded-[1.25rem] overflow-hidden">
                      <Icon_arrow color={"white"} op={".7"} />
                      <Title_example
                        title={"Site Management"}
                        wid={"14.25rem"}
                        color={"white"}
                        opacity={"1"}
                        description={"Make sure your site looks great when it is shared."}
                      />

                      <img
                        loading="lazy"
                        className="rounded-[15px] shadow-[0px_10px_60px_0px_rgba(0,0,0,.15)] max-w-[65.125rem] max-h-[37.625rem] absolute top-[10.4375rem] right-[2.75rem]"
                        src={Site_manage_image}
                        alt="Site_manage_image"
                      />
                    </div>
                  </div>
                  <div className="flex-1 h-[31.25rem] example__item_bg">
                    <div className="absolute inset-1 bg-linear-45 from-white to-white/45 rounded-[1.25rem] overflow-hidden">
                      <Icon_arrow color="#999999" op="1" />
                      <Title_example
                        title="Plugins"
                        description="Connect your site to popular apps."
                        color="black"
                        opacity=""
                        wid="8.1875rem"
                      />
                      <img
                        loading="lazy"
                        className="absolute left-1/2 -translate-x-1/2 top-[10.1875rem] min-w-[39.375rem] h-[21.875rem]"
                        src={Socal_image}
                        alt="Socal_image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
