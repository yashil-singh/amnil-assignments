import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <div className="px-4">
      <section className="bg-accent relative h-40 rounded-xl">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
          className="absolute -bottom-5 left-5 size-20 rounded-full border object-cover"
        />
      </section>

      <div className="mt-8 px-4">
        <h1 className="text-xl font-bold">{user?.name}</h1>
        <p className="text-muted-foreground">{user?.email}</p>
      </div>
    </div>
  );
};

export default Profile;
