import { setUser } from "@/lib/slices/auth/authSlice";
import { SignupPayload } from "@/lib/slices/auth/types";
import { AppDispatch } from "@/lib/store";
import { signup } from "@/services/auth/api";
import { AxiosError } from "axios";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import Logo from "../ui/Logo";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/Button";
import { Loader2 } from "lucide-react";
import { Link } from "react-router-dom";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<SignupPayload>();

  const dispatch = useDispatch<AppDispatch>();

  const handleSignup = async (payload: SignupPayload) => {
    try {
      const response = await signup(payload);
      console.log("🚀 ~ Signup.tsx:29 ~ response:", response);

      dispatch(setUser(response.user));
      toast.success(response.message);
      reset();
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
      onSubmit={handleSubmit(handleSignup)}
      className="flex w-full max-w-[350px] flex-col items-start space-y-4 rounded-xl border p-4"
    >
      <Logo className="mx-auto" />

      <h1 className="mx-auto text-center text-lg font-bold">
        Create a new account.
      </h1>

      <div className="w-full space-y-2">
        <div>
          <Label className="mb-2">Full Name</Label>
          <Input
            {...register("name", { required: "Full name is required" })}
            className={`${errors.name && "ring-destructive/20 focus-visible:ring-destructive/20 dark:ring-destructive/20 border-destructive focus-visible:border-destructive"}`}
            placeholder="Full Name"
          />
          {errors.name && (
            <p className="text-destructive text-sm font-medium">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <Label className="mb-2">Email Address</Label>
          <Input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
            })}
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
        {isSubmitting ? <Loader2 className="animate-spin" /> : "Signup"}
      </Button>

      <span className="text-muted-foreground mx-auto text-center text-sm">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-primary dark:text-secondary font-medium underline"
        >
          Login
        </Link>
      </span>
    </form>
  );
};

export default Signup;
