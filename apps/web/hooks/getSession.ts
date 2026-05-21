import { auth } from "@/app/auth";

export default async function getSessionNow() {
    const session = await auth();
    return session;
}