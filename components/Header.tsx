import Link from "next/link";
import { SiTwitter } from "react-icons/si";
import { ChevronLeft, ChevronRight, Settings2, Share2 } from "lucide-react";
import Button from "@/component-elements/Button";
import { useContext } from "react";
import { DrawerContext } from "@/stores/useDrawerStore";
import Export from "./Export";

const Header = ({
  undo,
  redo,
  undoStack,
  redoStack,
  paletteCode,
  palette,
}: any) => {
  const iconSize = 20;
  const { open } = useContext(DrawerContext);
  return (
    <>
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
        className="flex items-center gap-2 lg:hidden"
      >
        <SiTwitter />
        Follow on Twitter
      </Link>

      <div className="lg:flex items-center gap-7 hidden lg:visible">
        <div className="">
          <Export paletteCode={paletteCode} palette={palette} />
        </div>
        <div className="flex items-center">
          <Button
            onClick={undo}
            disabled={undoStack.length === 0 ? true : false}
          >
            <ChevronLeft size={iconSize} />
          </Button>
          <Button
            onClick={redo}
            disabled={redoStack.length === 0 ? true : false}
          >
            <ChevronRight size={iconSize} />
          </Button>
        </div>
        <div className="flex items-center">
          <Button onClick={open}>
            <Settings2 size={iconSize} />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Header;
