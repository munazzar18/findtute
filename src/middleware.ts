import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

interface User {
    id: string,
    username: string,
    email: string,
    role: string
}

// Make sure all paths are consistent
const unprotectedRoute = [
    '/auth/login',
    '/auth/register',
    '/',
    '/contact',
    '/about',
    '/services',
    '/pricing',
    '/how-it-works',
    '/privacy-policy',
    '/terms-condition'
]

const adminRoutes = [
    '/admin',
    '/admin/'
]

export function middleware(request: NextRequest) {
    const token = request.cookies.get('access_token')?.value
    const getUser = request.cookies.get('user')?.value
    const user: User = getUser ? JSON.parse(getUser) : null
    const isUnprotectedRoute = unprotectedRoute.includes(request.nextUrl.pathname)
    const isNextAsset = request.nextUrl.pathname.startsWith("/_next")

    const isAdminRoute = adminRoutes.some(route => request.nextUrl.pathname.startsWith(route))

    // If there's no token and the route is protected
    if (!token && !isUnprotectedRoute && !isNextAsset) {
        return NextResponse.redirect(new URL('/auth/login', request.url))
    }

    if (isAdminRoute && (!user || user.role !== 'admin')) {
        return NextResponse.redirect(new URL('/', request.url)) // Redirect to home if not admin
    }

    if (token && user && user.role === 'admin' && !isAdminRoute) {
        return NextResponse.redirect(new URL('/admin/dashboard', request.url))
    }

    // Allow request to proceed
    return NextResponse.next()
}

export const config = {
    matcher: [
        "/((?!.*\\..*|_next).*)",
        "/",
        "/(api|trpc)(.*)"
    ],
}
