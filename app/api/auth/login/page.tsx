import { Login } from "@/components/api/auth/login/Login";
/**
 * 演習 7-4 ログインUIを作成し、ログイン可能にする
 * ログインページ
 */
export default function LoginPage() {
    return (
        <main className="container mx-auto px-4">
            <Login />
        </main>
    );
}