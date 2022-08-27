import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import logo from "../../public/favicon.ico";

const Navbar = () => {
  const { data: session, status } = useSession();

  return (
    <nav className="fixed top-0 w-full py-6">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center justify-start space-x-16">
          <div>
            <Image src={logo} alt="logo" width={35} height={35} />
          </div>
          <p className="rounded-full border-[1px] border-gray-500 px-4 py-1 text-xl text-gray-800 ">
            About
          </p>
          <p className="rounded-full border-[1px] border-gray-500 px-4 py-1 text-xl text-gray-800">
            Explore
          </p>
        </div>
        <>
          {status === "unauthenticated" ? (
            <div className="rounded-full border-[1px] border-gray-500 px-4 py-1">
              <button className="text-xl" onClick={() => signIn()}>
                Login
              </button>
            </div>
          ) : (
            <div className="rounded-full border-[1px] border-gray-500 px-4 py-1">
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
