import randomColor from "randomcolor";
import { useEffect, useState } from "react";

export default function Home() {
  const [colors, setColors] = useState<string[]>([]);

  const generate = () => {
    setColors(randomColor({ count: 5 }));
  };

  useEffect(() => {
    generate();
  }, []);

  return (
    <div className="w-screen h-screen">
      <div className="flex shadow-sm items-center justify-between px-3 h-[10%]">
        <h1>Vibrantt</h1>
        <button>Follow on Twitter</button>
      </div>
      <div className="flex items-center justify-between h-[90%] bg-gray-600">
        <div className=" h-full w-[20%] bg-red-500"></div>
        <div className=" h-full w-[20%] bg-green-500"></div>
        <div className=" h-full w-[20%] bg-yellow-500"></div>
        <div className=" h-full w-[20%] bg-orange-500"></div>
        <div className=" h-full w-[20%] bg-purple-500"></div>
      </div>
      {/* <div className="h-[10%]"></div> */}
    </div>
  );
}
