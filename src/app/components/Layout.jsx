import React from "react";
import SideBar from "./Sidebar";
import Navbar from "./Navbar";
import OrderSection from "./OrderSection";
import { SidebarProvider } from "@/components/ui/sidebar";

function Layout({ children }) {
  return (
    <SidebarProvider>
      <div className="flex w-full">
        <SideBar />
        <div className="ml-24">
          <Navbar />
          <main className="mt-60">{children}</main>
        </div>

        <OrderSection />
      </div>
    </SidebarProvider>
  );
}

export default Layout;
