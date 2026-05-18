// auth.ts
import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"

const nextAuth = NextAuth({
  providers: [GitHub],
})

export const handlers = nextAuth.handlers
//export const auth = nextAuth.auth
export const signIn = nextAuth.signIn
export const signOut = nextAuth.signOut