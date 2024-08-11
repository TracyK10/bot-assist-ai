"use client";

import React, { useState } from "react";
import { TextField, Typography, Button, Container, Box } from "@mui/material";
import { useRouter } from "next/navigation";
import styles from "../styles/login.module.css";
import Link from "next/link";
import { signIn } from "next-auth/react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Make an API call to authenticate
    // Simulating a login

    if (email === "user@example.com" && password === "password") {
      // Redirect to chat page on successful login
      router.push("/chat");
    } else {
      setError("Invalid email or password");
    }
  };
  const handleGoogleSignIn = () => {
    signIn("google");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        p: 1,
      }}
    >
      <div className="w-96">
        <Box className={styles.loginCard}>
          <form onSubmit={handleSubmit} className={styles.loginForm}>
            <TextField
              label="Email"
              type="email"
              fullWidth
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              sx={{ borderRadius: "25px" }}
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {error && (
              <Typography className={styles.errorMessage}>{error}</Typography>
            )}
            <Button
              type="submit"
              variant="contained"
              fullWidth
              className={styles.submitButton}
            >
              Login
            </Button>
            <Button
              onClick={handleGoogleSignIn}
              variant="contained"
              fullWidth
              className={styles.googleButton}
            >
              Login with Google
            </Button>
          </form>
          <Typography className={styles.registerLink}>
            Do not have an account? <Link href="/register">Register</Link>
          </Typography>
        </Box>
      </div>
    </Box>
  );
}
