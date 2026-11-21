import React, { useActionState } from "react";
import { registerApi } from "../api/authApi";

interface ActionState {
  success: boolean;
  message: string | null;
}

export const RegisterPage: React.FC = () => {
  // React 19 useActionState hook manages submission lifecycle automatically
  const [state, formAction, isPending] = useActionState<ActionState, FormData>(
    async (_previousState, formData) => {
      try {
        const payload = {
          firstName: formData.get("firstName") as string,
          lastName: formData.get("lastName") as string,
          email: formData.get("email") as string,
          phno: formData.get("phno") as string,
          country_code: (formData.get("country_code") as string) || "+91",
          password: formData.get("password") as string,
          fcmId: "default-fcm-id",
        };

        const res = await registerApi(payload);
        if (res.code === 1) {
          return { success: true, message: "Registration successful!" };
        }
        return {
          success: false,
          message: res.message || "Registration failed.",
        };
      } catch (err: any) {
        return {
          success: false,
          message:
            err.response?.data?.message || "An unexpected error occurred.",
        };
      }
    },
    { success: false, message: null },
  );

  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: 20 }}>
      <h2>Create Account (React 19)</h2>

      {state.message && (
        <p style={{ color: state.success ? "green" : "red" }}>
          {state.message}
        </p>
      )}

      {/* React 19 allows passing async actions directly into the form's action prop */}
      <form
        action={formAction}
        style={{ display: "flex", flexDirection: "column", gap: 10 }}
      >
        <input name="firstName" placeholder="First Name" required />
        <input name="lastName" placeholder="Last Name" required />
        <input name="email" type="email" placeholder="Email" required />
        <input name="phno" placeholder="Phone Number" required />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
        />

        <button type="submit" disabled={isPending}>
          {isPending ? "Registering..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
};
