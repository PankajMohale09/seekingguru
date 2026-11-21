import React, { useActionState } from "react";
import { loginApi } from "../api/authApi";

interface LoginState {
  success: boolean;
  message: string | null;
}

export const LoginPage: React.FC = () => {
  const [state, formAction, isPending] = useActionState<LoginState, FormData>(
    async (_previousState, formData) => {
      try {
        const emailOrPhone = formData.get("emailOrPhone") as string;
        const password = formData.get("password") as string;

        const res = await loginApi({ emailOrPhone, password });

        const token = res.data?.login_token;
        if (token) {
          localStorage.setItem("login_token", token);
          return { success: true, message: "Login successful!" };
        }
        return {
          success: false,
          message: res.message || "Invalid credentials.",
        };
      } catch (err: any) {
        return {
          success: false,
          message: err.response?.data?.message || "Failed to login.",
        };
      }
    },
    { success: false, message: null },
  );

  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: 20 }}>
      <h2>Log In (React 19)</h2>

      {state.message && (
        <p style={{ color: state.success ? "green" : "red" }}>
          {state.message}
        </p>
      )}

      <form
        action={formAction}
        style={{ display: "flex", flexDirection: "column", gap: 10 }}
      >
        <input
          name="emailOrPhone"
          type="text"
          placeholder="Email or Phone Number"
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
        />

        <button type="submit" disabled={isPending}>
          {isPending ? "Logging in..." : "Log In"}
        </button>
      </form>
    </div>
  );
};
