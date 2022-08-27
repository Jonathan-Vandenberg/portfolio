import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import logo from "../../public/favicon.ico";
import Logo from "./Logo";

const Navbar = () => {
  const { data: session, status } = useSession();

  return (
    <nav className="fixed top-0 w-full py-6">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center justify-start space-x-16">
          <div className="text-3xl font-bold text-white">HotClick</div>
          <p className="rounded-full border-[1px] border-white px-4 py-1 text-xl text-white ">
            About
          </p>
          <p className="border-whte rounded-full border-[1px] px-4 py-1 text-xl text-white">
            Explore
          </p>
        </div>
        <>
          {status === "unauthenticated" ? (
            <div className="rounded-full border-[1px] border-white px-4 py-1">
              <button className="text-xl text-white" onClick={() => signIn()}>
                Login
              </button>
            </div>
          ) : (
            <div className="rounded-full border-[1px] border-white px-4 py-1 text-white">
              <button onClick={() => signOut()} className="text-xl">
                Log out
              </button>
            </div>
          )}
        </>
      </div>
    </nav>
  );
};

export default Navbar;
