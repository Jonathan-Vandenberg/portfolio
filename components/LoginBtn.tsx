import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
const AuthBtn = () => {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return (
      <div className="auth-btn">
        <div className="auth-info">
          <p>Refresh Icon</p>
        </div>
      </div>
    );
  }
  if (status === "unauthenticated") {
    return (
      <div className="auth-btn">
        <button className="bg-green-200" onClick={() => signIn()}>
          Login
        </button>
      </div>
    );
  }
  return (
    <div className="auth-btn">
      <div className="auth-info pr-2">
        <Image
          src={session.user.image}
          alt={session.user.name}
          width={30}
          height={30}
          className="rounded-full"
        />
        <p>Hi, {session.user.name}</p>
      </div>
      <div className="dropdown">
        <button onClick={() => signOut()} className="bg-red-200">
          Log out
        </button>
      </div>
    </div>
  );
};
export default AuthBtn;
