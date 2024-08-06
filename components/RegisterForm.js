"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "@/styles/register.module.css";
import { TextField, Typography, Button, Box } from "@mui/material";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Password don't match");
      return;
    }

    // Make API call to the register user
    // Simulate successful registration

    try {
      // Simulating an API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Registration successful", { name, email, password });
      router.push("/login");
    } catch (err) {
      setError("Registration failed. Please try again");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.registerForm}>
      <TextField
        label="Full Name"
        fullWidth
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        margin="normal"
      />
      <TextField
        label="Email"
        type="email"
        fullWidth
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        margin="normal"
      />
      <TextField
        label="Password"
        type="password"
        fullWidth
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        margin="normal"
      />
      <TextField
        label="Confirm Password"
        type="password"
        fullWidth
        variant="outlined"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
        margin="normal"
      />
      {error && (
        <Typography className={styles.errorMessage}>{error}</Typography>
      )}
      <Button
        type="submit"
        fullWidth
        variant="contained"
        className={styles.submitButton}
      >
        Register
      </Button>
      <Box className={styles.loginLink}>
        <Typography>
          Already have an account? <a href="/login">Login here</a>
        </Typography>
      </Box>
    </form>
  );
}
