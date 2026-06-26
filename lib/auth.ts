import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
/**
 * 演習 7-2 NextAuth.jsの導入と環境構築
 * NextAuthのオプション設定
 */
export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            // 入力フォームを定義する(APIのキー名に合わせる)
            credentials: {
                usernameOrEmail: { label: "UsernameorEmail", type: "text" },
                password: { label: "Password", type: "password" }
            },

            // 認証ロジックの実装
            async authorize(credentials) {
                try {
                    // バックエンドAPIへ認証リクエストを送信
                    const res = await fetch("http://20.78.35.126/api/auth/login", {
                        method: "POST",
                        // APIの仕様に合わせる
                        body: JSON.stringify({
                            usernameOrEmail: credentials?.usernameOrEmail,
                            password: credentials?.password,
                        }),
                        headers: { "Content-Type": "application/json" },
                    });

                    const token = await res.json();

                    // 認証成功(トークンが含まれている)ならユーザーオブジェクトを返す
                    if (res.ok && token) {
                        return token;
                    }
                    // 認証失敗
                    return null;
                } catch (error) {
                    console.error("★★★ バックエンドAPIとの通信エラー詳細 ★★★", error);
                    return null; // 認証失敗として扱う
                }
            }
        }),
    ],
};