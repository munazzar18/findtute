import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

interface User {
    id: string;
    username: string;
    email: string;
    role: string;
    is_verified: boolean;
}

// Normalize paths for consistent comparison
const normalizePath = (path: string) => path.replace(/\/$/, '');

const unprotectedRoutes = [
    '/auth/login',
    '/auth/register',
    '/auth/forgot-password',
    '/auth/verify-otp',
    '/auth/reset-password', // This covers the base route
    '/',
    '/contact',
    '/about',
    '/services',
    '/pricing',
    '/how-it-works',
    '/privacy-policy',
    '/terms-condition',
].map(normalizePath);

const adminRoutes = ['/admin', '/admin/dashboard'].map(normalizePath);

export function middleware(request: NextRequest) {
    const token = request.cookies.get('access_token')?.value;
    const getUser = request.cookies.get('user')?.value;
    const user: User | null = getUser ? JSON.parse(getUser) : null;

    const pathname = normalizePath(request.nextUrl.pathname);

    // Check for various route types
    const isNextAsset = pathname.startsWith('/_next');
    const isApiRoute = pathname.startsWith('/api') || pathname.startsWith('/trpc');
    const isResetPasswordRoute = pathname.startsWith('/auth/reset-password');
    const isUnprotectedRoute = unprotectedRoutes.includes(pathname) || isResetPasswordRoute;
    const isAdminRoute = adminRoutes.some(route => pathname.startsWith(route));
    const isOnboardingRoute = pathname === '/onboarding';
    const paymentRoute = pathname.startsWith('/dashboard/payment-successfull');
    const paymentFailedRoute = pathname.startsWith('/dashboard/payment-failed');

    // Skip middleware for Next.js assets and API routes
    if (isNextAsset || isApiRoute) {
        return NextResponse.next();
    }

    // Allow unprotected routes (including reset password with tokens)
    if (isUnprotectedRoute) {
        return NextResponse.next();
    }

    // If there's no token and the route is protected
    if (!token) {
        return NextResponse.redirect(new URL('/auth/login', request.url));
    }

    // Prevent non-admins from accessing admin routes
    if (isAdminRoute && (!user || user.role !== 'admin')) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    // Redirect admin to dashboard after login if accessing the root route
    if (user?.role === 'admin' && pathname === '/') {
        return NextResponse.redirect(new URL('/admin/dashboard', request.url));
    }

    // Handle onboarding redirect - but NEVER for admin users
    if (user && user.role != 'admin' && user.is_verified === false && !isOnboardingRoute) {
        return NextResponse.redirect(new URL('/onboarding', request.url));
    }

    // Handle payment routes
    if (paymentRoute || paymentFailedRoute) {
        const hasQueryParameters = request.nextUrl.searchParams.toString() !== '';
        if (!hasQueryParameters) {
            return NextResponse.redirect(new URL('/dashboard', request.url));
        }
    }

    // Allow request to proceed
    return NextResponse.next();
}

export const config = {
    matcher: [
        '/((?!.*\\.|_next).*)',
        '/',
        '/(api|trpc)(.*)'
    ],
};