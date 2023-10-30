"use client";

import { ArrowRight, LucideIcon } from "lucide-react";
import { FC } from "react";
import { Card } from "../ui/card";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

interface IDashboardCard {
  item: {
    label: string;
    icon: LucideIcon;
    color: string;
    bgColor: string;
    href: string;
  };
}

const DashboardCard: FC<IDashboardCard> = ({ item }) => {
  const router = useRouter();

  return (
    <Card
      onClick={() => router.push(item.href)}
      className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
    >
      <div className="flex items-center gap-x-4">
        <div className={cn("p-2 w-fit rounded-md ", item.bgColor)}>
          <item.icon className={cn("w-8 h-8", item.color)}></item.icon>
        </div>
        <div className="font-semibold">{item.label}</div>
      </div>
      <ArrowRight className="h-5 w-5" />
    </Card>
  );
};

export default DashboardCard;
