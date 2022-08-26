import logout from "@auth0/nextjs-auth0/dist/auth0-session/handlers/logout";
import LoginBtn from "../components/LoginBtn";

const Home = () => {
  return (
    <div>
      <h1>Authentication again...</h1>
      <LoginBtn />
    </div>
  );
};

export default Home;
