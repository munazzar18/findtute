import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

interface User {
    id: string;
    username: string;
    email: string;
    role: string;
}

// Normalize paths for consistent comparison
const normalizePath = (path: string) => path.replace(/\/$/, '');

const unprotectedRoute = [
    '/auth/login',
    '/auth/register',
    '/auth/forgot-password',
    '/auth/verify-otp',
    '/reset-password',
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

    const isUnprotectedRoute = unprotectedRoute.includes(pathname);
    const isNextAsset = pathname.startsWith('/_next');
    const isAdminRoute = adminRoutes.some(route => pathname.startsWith(route));
    const paymentRoute = pathname.startsWith('/dashboard/payment-successfull');
    const paymentFailedRoute = pathname.startsWith('/dashboard/payment-failed');


    // If there's no token and the route is protected
    if (!token && !isUnprotectedRoute && !isNextAsset) {
        return NextResponse.redirect(new URL('/auth/login', request.url));
    }

    // Prevent non-admins from accessing admin routes
    if (isAdminRoute && (!user || user.role !== 'admin')) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    // Redirect admin to dashboard if accessing non-admin routes
    if (token && user?.role === 'admin' && !isAdminRoute && pathname !== '/admin/dashboard') {
        return NextResponse.redirect(new URL('/admin/dashboard', request.url));
    }

    if (paymentRoute) {
        const hasQueryParameters = request.nextUrl.searchParams.toString() !== '';
        if (!hasQueryParameters) {
            return NextResponse.redirect(new URL('/dashboard', request.url));
        }
    }

    if (paymentFailedRoute) {
        const hasQueryParameters = request.nextUrl.searchParams.toString() !== '';
        if (!hasQueryParameters) {
            return NextResponse.redirect(new URL('/dashboard', request.url));
        }
    }

    // Allow request to proceed
    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
