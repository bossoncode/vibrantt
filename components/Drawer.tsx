import Button from "@/component-elements/Button";
import useDrawerStore, { DrawerContext } from "@/stores/useDrawerStore";
import { X } from "lucide-react";
import { useState } from "react";

const Drawer = () => {
  const { isOpen, open, close } = useDrawerStore();
  return (
    <div
      className={`w-72 h-full shadow-2xl absolute bg-[#3e4452] right-0 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } z-[10000000] px-2 transition-all`}
    >
      <div className="flex items-center py-1 justify-between">
        <h1 className="font-semibold text-2xl">Setting</h1>
        <Button onClick={close}>
          <X />
        </Button>
      </div>
    </div>
  );
};

export default Drawer;
