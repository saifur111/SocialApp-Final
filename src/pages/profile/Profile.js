import useAuth from "../../hooks/useAuth";

const Profile =()=> {
  const {user}=useAuth();
  return (
    <>
      <h1 className="text-center">Sign In As : {user?.displayName}</h1>
    </>
  );
}
export default Profile;
