"use client";
import Link from "next/link";
import { Settings, User, Grid, Calendar } from "react-feather";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const icons = { Settings, User, Grid, Calendar };

interface SidebarLinkProps {
  link: {
    label: string;
    icon: keyof typeof icons;
    link: string;
  };
}


const SidebarLink = ({ link }: SidebarLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === link.link;

  const Icon = icons[link.icon];
  return (
    <Link href={link.link} className="w-full flex justify-center items-center">
      <Icon
        size={40}
        className={clsx(
          "stroke-gray-400 hover:stroke-violet-600 transition duration-200 ease-in-out",
          isActive && "stroke-violet-600"
        )}
      />
    </Link>
  );
};

export default SidebarLink;