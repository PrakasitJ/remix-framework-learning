import type { MetaFunction } from "@remix-run/node";
import Navbar from "./navbar";
import { Outlet } from "@remix-run/react";
import Footer from "./footer";

export const meta: MetaFunction = () => {
  return [
    { title: "Genshin Impact" },
    { name: "description", content: "Welcome to Genshin Impact!" },
  ];
};

export default function index() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-20">
        <Navbar />
      </div>

      {/* Background Image */}
      <div className="bg-genshin-index-bg w-full h-full absolute inset-0 -z-10 animate-genshinBG"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-16">
        <Outlet />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}
