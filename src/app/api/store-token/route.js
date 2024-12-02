import { NextResponse } from 'next/server';

const storeTokenInCookies = (token, res) => {
    const expires = new Date();
    expires.setDate(expires.getDate() + 7); // Cookie expires in 7 days
    res.headers.set('Set-Cookie', `auth_token=${token}; Path=/; Expires=${expires.toUTCString()}; SameSite=Strict; HttpOnly`);
};

export async function GET(req) {
    const url = new URL(req.url);
    const token = url.searchParams.get("token");

    if (token) {
        // Store the token in cookies
        storeTokenInCookies(token, req);
        localStorage.setItem('token', token)

        // Redirect to /home after storing the token
        return NextResponse.redirect(new URL('/home/my-projects', req.url), { status: 302 });
    } else {
        return NextResponse.json(
            { error: "Token is required" },
            { status: 400 }
        );
    }
}
