import { withAuth } from "next-auth/middleware";
/**
 * 演習 7-6 ミドルウェアを実装する
 * 商品管理系のすべてのページをガード対象とする
 * ユーザー登録画面も認証必須とするためガード対象とする
 */
// ミドルウェアの処理と、未ログイン時のリダイレクト先を指定
export default withAuth({
    pages: {
        signIn: "/api/auth/login", // ログイン画面のパスを指定
    },
});
export const config = {
    // 配列に"/api/products/:path*"と"/api/users/:path*"を追加
    matcher: [
        "/api/products/:path*",
        "/api/users/:path*"
    ],
};