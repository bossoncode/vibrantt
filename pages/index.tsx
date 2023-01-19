import useCopyToClipboard from "@/hooks/useCopyToClipboard";
import randomColor from "randomcolor";
import { useEffect, useState } from "react";
import { BiCopy } from "react-icons/bi";
import { SiTwitter } from "react-icons/si";
import copy from "copy-to-clipboard";
import Link from "next/link";

export default function Home() {
  const [colors, setColors] = useState<string[]>([]);
  const [copyText, setCopyText] = useState<string>("Copy");

  const generate = () => {
    setColors(randomColor({ count: 5 }));
  };

  function hexToRgb(hex: string) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return { r, g, b };
  }

  function getLuminosity(hexCode: string) {
    const rgb = hexToRgb(hexCode);
    return 0.2126 * rgb.r + 0.7152 * rgb.g + 0.0722 * rgb.b;
  }

  useEffect(() => {
    generate();
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.code === "Space") {
        generate();
      }
    };
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div className="w-screen h-screen fixed">
      <div className="flex shadow-sm items-center justify-between px-5 lg:h-[10%] h-[60px]">
        <img
          src="https://res.cloudinary.com/xing0x/image/upload/v1674131509/VIBRANTwbgggw_w6j7m9.png"
          className="w-32"
          alt=""
        />

        <p className="text-xl text-center lg:block hidden">
          Press the space bar to generate a new palette!
        </p>

        <Link
          href="https://twitter.com/vibranttdotco/"
          target={"_blank"}
          className="flex items-center gap-2"
        >
          <SiTwitter />
          Follow on Twitter
        </Link>
      </div>

      <div className="flex items-center justify-start lg:h-[90%] h-[80%] lg:flex-row flex-col">
        {colors.map((color, i) => {
          const luminosity = getLuminosity(color);
          console.log(luminosity);
          const textColor = luminosity >= 128 ? "text-black" : "text-white";
          return (
            <div
              key={i}
              className={`lg:h-full h-[20%] lg:w-[20%]  w-full flex items-center justify-center`}
              style={{
                backgroundColor: color,
              }}
            >
              <div className={`${textColor}`}>
                <h1 className={`lg:text-4xl text-xl font-semibold`}>
                  {color.toUpperCase()}
                </h1>
                <center className="lg:mt-5">
                  <div className="tooltip" data-tip={copyText}>
                    <button
                      className="p-2 rounded-full outline-none text-2xl"
                      onClick={() => {
                        copy(color);
                        setCopyText("Copied");
                        setTimeout(() => {
                          setCopyText("Copy");
                        }, 750);
                      }}
                    >
                      <BiCopy />
                    </button>
                  </div>
                </center>
              </div>
            </div>
          );
        })}
      </div>
      <div className="py-4 px-3 lg:hidden">
        <button className="btn" onClick={generate}>
          Generate
        </button>
      </div>
    </div>
  );
}
