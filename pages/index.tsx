import { useEffect } from "react";
import Layout from "../components/layout";
import { useFetchUser } from "../lib/user";
import { useAddUserMutation } from "../types";
import { uuid } from "uuidv4";

const Home = () => {
  const { user, loading } = useFetchUser();

  console.log(user);

  const [addUserMutation, { data, loading: addUserLoading, error }] =
    useAddUserMutation();

  useEffect(() => {
    if (user) {
      addUserMutation({
        variables: {
          input: {
            id: uuid(),
            email: user.email,
            email_verified: user.email_verified,
            name: user.name,
            nickname: user.nickname,
            picture: user.picture,
            sub: user.sub,
            updated_at: user.update_at,
          },
        },
      });
    }
  }, []);

  return (
    <Layout user={user} loading={loading}>
      {!loading && !user && (
        <div className="sectionOneBg h-screen w-screen"></div>
      )}

      {user && (
        <>
          <h4>Rendered user info on the client</h4>
          <img src={user.picture} alt="user picture" />
          <p>nickname: {user.nickname}</p>
          <p>name: {user.name}</p>
          <p>email: {user.email}</p>
        </>
      )}
    </Layout>
  );
};

export default Home;
