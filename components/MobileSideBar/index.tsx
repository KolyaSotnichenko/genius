"use client";

import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import SideBar from "../SideBar";
import { FC, useEffect, useState } from "react";

interface IMobileSideBarProps {
  apiLimitCount: number;
  isPro: boolean;
}

const MobileSideBar: FC<IMobileSideBarProps> = ({
  apiLimitCount = 0,
  isPro = false,
}) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <SideBar isPro={isPro} apiLimitCount={apiLimitCount} />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSideBar;
