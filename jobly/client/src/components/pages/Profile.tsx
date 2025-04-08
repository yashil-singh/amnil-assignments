import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";
import { Separator } from "../ui/separator";
import { Github, Linkedin, Mail, Pen } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/Button";

const Profile = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <div className="grid gap-4 px-4 md:grid-cols-3">
      <section className="md:col-span-2">
        <div className="bg-accent relative h-40 rounded-xl">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
            className="absolute -bottom-5 left-5 size-20 rounded-full border object-cover"
          />
        </div>
        <div className="mt-8 px-4">
          <div className="flex justify-between gap-4">
            <section>
              <h1 className="text-xl font-bold">{user?.name}</h1>
              <p className="text-muted-foreground">{user?.email}</p>
            </section>

            <section>
              <Button className="size-10" variant="ghost" size="icon" asChild>
                <Link to="/settings/edit-profile">
                  <Pen className="size-5" />
                </Link>
              </Button>
            </section>
          </div>
        </div>
      </section>

      <section className="px-4">
        <div className="w-full space-y-4">
          <div className="space-y-2">
            <h1 className="text-lg font-bold">Social Links</h1>

            <div className="flex items-center gap-2 break-all">
              <span className="bg-accent flex rounded-lg p-2">
                <Mail className="text-accent-foreground" />
              </span>

              <span className="text-muted-foreground text-sm underline">
                {user?.email}
              </span>
            </div>

            <div className="flex items-center gap-2 break-all">
              <span className="bg-accent flex rounded-lg p-2">
                <Github className="text-accent-foreground" />
              </span>

              <Link to="https://github.com/yashil-singh" target="_blank">
                <span className="text-muted-foreground text-sm underline">
                  GitHub
                </span>
              </Link>
            </div>

            <div className="flex items-center gap-2 break-all">
              <span className="bg-accent flex rounded-lg p-2">
                <Linkedin className="text-accent-foreground" />
              </span>

              <Link
                to="https://www.linkedin.com/in/yashil-singh/"
                target="_blank"
              >
                <span className="text-muted-foreground text-sm underline">
                  LinkedIn
                </span>
              </Link>
            </div>
          </div>

          <Separator />
        </div>
      </section>
    </div>
  );
};

export default Profile;
