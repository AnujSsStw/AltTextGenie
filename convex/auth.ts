import { convexAuth } from "@convex-dev/auth/server";
import Google from "@auth/core/providers/google";
import { ResendOTP, ResendOTPPasswordReset } from "./otp/ResendOTP";
import { Password } from "@convex-dev/auth/providers/Password";

export const { auth, signIn, signOut, store } = convexAuth({
  providers: [
    ResendOTP,
    Google({
      authorization: {
        params: {
          access_type: "offline",
          prompt: "consent",
          scope: "email profile",
        },
      },
    }),

    Password({
      id: "password-code",
      reset: ResendOTPPasswordReset,
      verify: ResendOTP,
    }),
    // Password({ id: "password-with-reset", reset: ResendOTPPasswordReset }),
  ],
});
