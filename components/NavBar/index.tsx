import { UserButton } from "@clerk/nextjs";
import MobileSideBar from "../MobileSideBar";
import { getApiLimitCount } from "@/lib/api-limit";
import { FC } from "react";
import { checkSubscription } from "@/lib/subscription";

const NavBar: FC = async () => {
  const apiLimitCount = await getApiLimitCount();
  const isPro = await checkSubscription();

  return (
    <div className="flex items-center p-4">
      <MobileSideBar isPro={isPro} apiLimitCount={apiLimitCount} />
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default NavBar;
