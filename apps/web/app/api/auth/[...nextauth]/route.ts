// app/api/auth/[...nextauth]/route.ts
import { handlers } from "../../../auth"
import { NextRequest } from "next/server"

// Explicitly typing the handlers satisfies TypeScript's portability rules
export const GET = (req: NextRequest) => handlers.GET(req)
export const POST = (req: NextRequest) => handlers.POST(req)