import { Bell, Settings } from "lucide-react";
import Logo from "./Logo";
import { Link, NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { Button } from "./Button";
import AccountAvatar from "./AccountAvatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { logout } from "@/services/auth/api";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/lib/store";
import { clearUser } from "@/lib/slices/auth/authSlice";
import { toggleTheme } from "@/lib/slices/theme/themeSlice";
import { toast } from "sonner";
import { AxiosError } from "axios";

const Header = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  const handleLogout = async () => {
    try {
      const response = await logout();
      toast.success(response.message);
      dispatch(clearUser());
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error?.response?.data.message);
      } else {
        toast.error("Oops! Something went wrong.");
      }
    }
  };

  return (
    <header className="bg-primary sticky top-0 z-10 w-full p-4">
      <div className="fluid flex items-center justify-between">
        <section className="flex flex-1 items-center gap-12">
          <Link to="/">
            <Logo />
          </Link>

          <nav className="text-primary-foreground hidden w-full space-x-8 p-4 md:flex">
            <NavLink to="/">
              {({ isActive }) => (
                <>
                  <span
                    className={twMerge(
                      "hidden font-medium hover:underline md:block",
                      isActive && "underline",
                    )}
                  >
                    Home
                  </span>
                </>
              )}
            </NavLink>
            <NavLink to="/search">
              {({ isActive }) => (
                <>
                  <span
                    className={twMerge(
                      "hidden font-medium hover:underline md:block",
                      isActive && "underline",
                    )}
                  >
                    Search
                  </span>
                </>
              )}
            </NavLink>
          </nav>
        </section>

        <section className="flex items-center gap-1">
          <DropdownMenu>
            <DropdownMenuTrigger className="cursor-pointer outline-none!">
              <AccountAvatar src="" className="size-10" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="text-lg font-medium">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <Link to="/profile">
                <DropdownMenuItem className="cursor-pointer">
                  Profile
                </DropdownMenuItem>
              </Link>
              <Link to="/saved-jobs">
                <DropdownMenuItem className="cursor-pointer">
                  Saved Jobs
                </DropdownMenuItem>
              </Link>
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={handleToggleTheme}
              >
                Switch Theme
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <button className="w-full" onClick={handleLogout}>
                <DropdownMenuItem className="text-destructive hover:text-destructive! cursor-pointer">
                  Logout
                </DropdownMenuItem>
              </button>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link to="/settings">
            <Button
              variant="ghost-dark"
              size="icon"
              className="text-primary-foreground hover:bg-accent-dark active:bg-accent-dark/80 border-accent-dark border"
            >
              <Settings className="size-5 text-white" />
            </Button>
          </Link>
          <Link to="/notifications">
            <Button
              variant="ghost-dark"
              size="icon"
              className="text-primary-foreground hover:bg-accent-dark active:bg-accent-dark/80 border-accent-dark border"
            >
              <Bell className="size-5 text-white" />
            </Button>
          </Link>
        </section>
      </div>
    </header>
  );
};

export default Header;
