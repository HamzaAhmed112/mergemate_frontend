import { NextResponse } from 'next/server';

const storeTokenInCookies = (token, res) => {
    const expires = new Date();
    expires.setDate(expires.getDate() + 7);
    res.headers.set('Set-Cookie', `auth_token=${token}; Path=/; Expires=${expires.toUTCString()}; SameSite=Strict; HttpOnly`);
};

export async function GET(req) {
    const url = new URL(req.url);
    const token = url.searchParams.get("token");

    if (token) {
        storeTokenInCookies(token, req);

        return NextResponse.redirect(new URL(`/home?token=${token}`, req.url), { status: 302 });
    } else {
        return NextResponse.json(
            { error: "Token is required" },
            { status: 400 }
        );
    }
}
