"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

// Define the User interface
interface User {
  email: string;
  password: string;
}

export default function LoginPage() {
  const router = useRouter();

  // Define the user state with the proper type
  const [user, setUser] = React.useState<User>({
    email: "",
    password: "",
  });

  const [buttonDisabled, setButtonDisabled] = React.useState(true); // Button is disabled by default
  const [loading, setLoading] = React.useState(false);

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("Login success", response.data);
      toast.success("Login success");
      router.push("/profile");
    } catch (error: unknown) {
      console.log("Login failed", error);

      // Handle the error based on its type
      if (axios.isAxiosError(error) && error.response) {
        toast.error(error.response.data?.message || "Login failed");
      } else {
        toast.error("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Enable the button only if email and password are filled
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>{loading ? "Processing" : "Login"}</h1>
      <hr />

      <label htmlFor="email">Email</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mt-1 mb-4 focus:outline-none focus:border-gray-600"
        id="email"
        type="email" // Change input type to email for validation
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="Email"
      />

      <label htmlFor="password">Password</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mt-1 mb-4 focus:outline-none focus:border-gray-600"
        id="password"
        type="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="Password"
      />

      <button
        onClick={onLogin}
        className="p-2 border border-gray-300 rounded-lg mt-1 mb-4 focus:outline-none focus:border-gray-600"
        disabled={buttonDisabled} // Disable the button when the form is incomplete
      >
        {loading ? "Logging in..." : "Login here"}
      </button>

      <Link href="/signup">Visit SignUp Page</Link>
    </div>
  );
}
