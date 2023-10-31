import { UserButton } from "@clerk/nextjs";
import MobileSideBar from "../MobileSideBar";
import { getApiLimitCount } from "@/lib/api-limit";
import { FC } from "react";

const NavBar: FC = async () => {
  const apiLimitCount = await getApiLimitCount();

  return (
    <div className="flex items-center p-4">
      <MobileSideBar apiLimitCount={apiLimitCount} />
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default NavBar;
