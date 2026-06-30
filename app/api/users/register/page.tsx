import { RegisterUser } from "@/components/api/users/register/RegisterUser";
/**
 * 演習 8-6 画面のコンポーネントとページを作成し、動作確認する
 * ユーザー登録ページ
 * URL: /api/users/register
 */
export default function RegisterUserPage() {
    return (
        <main className="container mx-auto py-8">
            {/* UIコンポーネントを呼び出す */}
            <RegisterUser />
        </main>
    );
}