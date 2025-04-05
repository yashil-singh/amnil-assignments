import { LoginPayload } from "@/lib/slices/auth/types";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/Button";
import Logo from "../ui/Logo";
import { Label } from "../ui/label";
import { Link } from "react-router-dom";
import { login } from "@/services/auth/api";
import { AxiosError } from "axios";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/lib/store";
import { setUser } from "@/lib/slices/auth/authSlice";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginPayload>();

  const dispatch = useDispatch<AppDispatch>();

  const handleLogin = async (payload: LoginPayload) => {
    try {
      const response = await login(payload);

      dispatch(setUser(response.user));
      toast.success(response.message);
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message);
      } else {
        toast.error("Oops! Something went wrong.");
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
      className="flex w-full max-w-[350px] flex-col items-start space-y-4 rounded-xl border p-4"
    >
      <Logo className="mx-auto" />

      <h1 className="mx-auto text-center text-lg font-bold">
        Login to your account.
      </h1>

      <div className="w-full space-y-2">
        <div>
          <Label className="mb-2">Email Address</Label>
          <Input
            {...register("email", { required: "Email is required" })}
            className={`${errors.email && "ring-destructive/20 focus-visible:ring-destructive/20 dark:ring-destructive/20 border-destructive focus-visible:border-destructive"}`}
            placeholder="Email"
          />
          {errors.email && (
            <p className="text-destructive text-sm font-medium">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <Label className="mb-2">Password</Label>

          <Input
            {...register("password", { required: "Password is required" })}
            className={`${errors.password && "ring-destructive/20 focus-visible:ring-destructive/20 dark:ring-destructive/20 border-destructive focus-visible:border-destructive"}`}
            placeholder="Password"
            type="password"
          />
          {errors.password && (
            <p className="text-destructive text-sm font-medium">
              {errors.password.message}
            </p>
          )}
        </div>
      </div>

      <Button className="w-full" disabled={isSubmitting}>
        {isSubmitting ? <Loader2 className="animate-spin" /> : "Login"}
      </Button>

      <span className="text-muted-foreground mx-auto text-center text-sm">
        Don't have an account?{" "}
        <Link
          to="/signup"
          className="text-primary dark:text-secondary font-medium underline"
        >
          Signup
        </Link>
      </span>
    </form>
  );
};

export default Login;
