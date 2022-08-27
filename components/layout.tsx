import Head from "next/head";
import Header from "./header";

type LayoutProps = {
  user?: any;
  loading?: boolean;
  children: React.ReactNode;
};

const Layout = ({ user, loading = false, children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Next.js with Auth0</title>
      </Head>
      <main>
        <div className="container mx-auto flex flex-col items-center justify-center">
          {children}
        </div>
      </main>
    </>
  );
};

export default Layout;
