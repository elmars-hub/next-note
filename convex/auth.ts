// @ts-ignore: module has no type declarations available in this project
import { convexAuth } from "@convex-dev/auth/server";
import { Password } from "@convex-dev/auth/providers/password";

export const { auth, signIn, signOut, store, isAuthenticated } = convexAuth({
  providers: [Password],
});
