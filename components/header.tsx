import Link from "next/link";

type HeaderProps = {
  user?: any;
  loading: boolean;
};

const Header = ({ user, loading }: HeaderProps) => {
  return (
    <header>
      <nav>
        <ul className="mb-12 flex items-center justify-center space-x-5 shadow-lg">
          <li className="p-5 text-lg font-semibold">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="p-5 text-lg font-semibold">
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          {!loading &&
            (user ? (
              <>
                <li className="p-5 text-lg font-semibold">
                  <Link href="/profile">
                    <a>Client-rendered profile</a>
                  </Link>
                </li>

                <li className="p-5 text-lg font-semibold">
                  <a href="/api/logout">Logout</a>
                </li>
              </>
            ) : (
              <li className="p-5 text-lg font-semibold">
                <a href="/api/login">Login </a>
              </li>
            ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
