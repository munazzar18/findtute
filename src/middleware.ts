import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const unprotectedRoute = ['/auth/login', '/auth/register']

export function middleware(request: NextRequest) {
    const token = request.cookies.get('access_token')?.value

    if (!token && !unprotectedRoute.includes(request.nextUrl.pathname)) {
        return NextResponse.redirect(new URL('/auth/login', request.url))
    }

    if (token && unprotectedRoute.includes(request.nextUrl.pathname)) {
        return NextResponse.redirect(new URL('/home', request.url))
    }

    return NextResponse.next()

}

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
}