import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarProvider,
} from "@/components/ui/sidebar";

import { Store, CircleGauge, House, Settings, LogOut } from "lucide-react";
import Link from "next/link";

function SideBar() {
  return (
    <Sidebar className="flex">
      {/* TOP MENU */}
      <SidebarContent className="flex flex-col items-center gap-15 py-3">
        <div className="rounded-xl bg-yellow-300/30 p-2">
          <Store className="text-yellow-500" size={40} />
        </div>

        <Link href="/home" className="hover:opacity-70">
          <House className="text-yellow-500" />
        </Link>

        <Link href="/dashboard" className="hover:opacity-70">
          <CircleGauge className="text-yellow-500" />
        </Link>

        <Link href="/settings" className="hover:opacity-70">
          <Settings className="text-yellow-500" />
        </Link>
      </SidebarContent>

      {/* FOOTER */}
      <SidebarFooter className="flex justify-center pb-6">
        <Link href="/logout" className="hover:opacity-70">
          <LogOut className="text-yellow-500" />
        </Link>
      </SidebarFooter>
    </Sidebar>
  );
}

export default SideBar;
