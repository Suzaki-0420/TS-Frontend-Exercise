"use client";

import { SessionProvider } from "next-auth/react";
/**
 * 演習 7-3 取得したJWTをアプリケーション全体で利用可能にする
 * NextAuthのSessionProviderでアプリ全体をラップするプロバイダコンポーネント
 */
export const NextAuthProvider = ({ children }: { children: React.ReactNode }) => {
    return <SessionProvider>{children}</SessionProvider>;
};