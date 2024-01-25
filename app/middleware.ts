import { NextResponse } from 'next/server';
import { auth } from './auth';

// This middleware will run for all routes
interface Props {
  children?: React.ReactNode;
  request: any;
}


export async function middleware(request: any) {
  const session = await auth();
  const isAuthenticated = session?.user;

  if (isAuthenticated == null) {
    const url = request.nextUrl.clone();
    url.pathname = '/'; // Redirect to homepage
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}