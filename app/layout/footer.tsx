/**
 * 演習 5-5 ナビゲーションメニューで新しい共通ページを作成する
 * メニューのフッター
 */
export default function Footer() {
    return (
        <footer className="bg-rose-100 border-t border-rose-200 p-4 text-center text-sm text-rose-900 mt-auto">
            &copy; {new Date().getFullYear()} Fullness,Inc. All Rights Reserved.
        </footer>
    );
}