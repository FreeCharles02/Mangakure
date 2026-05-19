// auth.ts
import NextAuth, { NextAuthResult } from "next-auth"
import GitHub from "next-auth/providers/github"

const nextAuth = NextAuth({
  providers: [GitHub],
})

export const handlers = nextAuth.handlers
export const auth: NextAuthResult["auth"] = nextAuth.auth;
export const signIn = nextAuth.signIn
export const signOut = nextAuth.signOut