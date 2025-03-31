import React, { useEffect, useState } from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { Link, useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
import useFetch from "@/hooks/useFetch";
import useAuth from "@/hooks/useAuth";
import { toast } from "react-toastify";
import useAuthContext from "@/hooks/useAuthContext";

const Login = () => {
  const { setUserData } = useAuthContext();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState(null);

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(null);

  const { login } = useAuth();
  const { data, error, fetchData, loading } = useFetch(
    () => login(username, password),
    false
  );

  const resetErrros = () => {
    setUsernameError(null);
    setPasswordError(null);
  };

  const resetInputs = () => {
    setUsername("");
    setPassword("");
  };

  const onLogin = async (e) => {
    e.preventDefault();

    resetErrros();

    let errors = 0;

    if (!username.trim()) {
      setUsernameError("Username is required.");
      errors += 1;
    }

    if (!password.trim()) {
      setPasswordError("Password is required.");
      errors += 1;
    }

    if (!errors > 0) fetchData();
  };

  useEffect(() => {
    if (data) {
      resetErrros();
      resetInputs();

      toast(data.message);

      setUserData(data.user);

      navigate("/");
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      toast.error(error.message);
    }
  }, [error]);

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-extrabold">Login to your account</h3>

      <form
        className="w-full space-y-2 flex flex-col items-center"
        onSubmit={onLogin}
      >
        <Input
          label="Username"
          name="username"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          error={usernameError}
        />

        <Input
          label="Password"
          name="password"
          placeholder="Enter your password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={passwordError}
        />

        <Button className="mt-1" disabled={loading}>
          {loading ? <Loader2 className="animate-spin" /> : "Login"}
        </Button>

        <span className="text-sm font-medium">
          Don't have an account?{" "}
          <Link to="/signup" className="text-primary underline">
            Signup
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
