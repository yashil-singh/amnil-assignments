import React, { useEffect, useState } from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "@/hooks/useAuth";
import useFetch from "@/hooks/useFetch";
import { toast } from "react-toastify";
import { Loader2 } from "lucide-react";
import useAuthContext from "@/hooks/useAuthContext";

const Signup = () => {
  const navigate = useNavigate();
  const { setUserData } = useAuthContext();

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");

  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const { signup } = useAuth();

  const { data, error, loading, fetchData } = useFetch(
    () => signup(name, username, password),
    false
  );

  const resetErrros = () => {
    setNameError(null);
    setUsernameError(null);
    setPasswordError(null);
  };

  const resetInputs = () => {
    setName("");
    setUsername("");
    setPassword("");
  };

  const onSignup = async (e) => {
    e.preventDefault();

    resetErrros();

    let errors = 0;

    if (!name.trim()) {
      setNameError("Full name is required.");
      errors += 1;
    }

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
      <h3 className="text-lg font-extrabold">Create an account</h3>

      <form
        className="w-full space-y-2 flex flex-col items-center"
        onSubmit={onSignup}
      >
        <Input
          label="Full Name"
          name="name"
          placeholder="Enter your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={nameError}
        />

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
          {loading ? <Loader2 className="animate-spin" /> : "Signup"}
        </Button>

        <span className="text-sm font-medium">
          Already have an account?{" "}
          <Link to="/login" className="text-primary underline">
            Login
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Signup;
