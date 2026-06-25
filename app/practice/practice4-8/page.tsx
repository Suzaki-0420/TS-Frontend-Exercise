"use client";

import UserTable, { User } from "@/components/practice/UserTable";

// 作成したテーブル部品と、データの型(User)をインポート

export default function TableSamplePage() {
    // 表示するための配列データ（実務ではデータベースから取得します）
    const usersData: User[] = [
        { id: 1, name: "山田 太郎", department: "営業部", role: "管理者" },
        { id: 2, name: "鈴木 花子", department: "人事部", role: "一般ユーザー" },
        { id: 3, name: "佐藤 次郎", department: "開発部", role: "ゲスト" },
        { id: 4, name: "田中 結衣", department: "総務部", role: "一般ユーザー" },
    ];

    return (
        <main className="p-4 max-w-3xl mx-auto mt-10">
            <h1 className="text-2xl font-bold mb-6 border-b pb-2 text-gray-800">
                社員名簿（テーブル表示）
            </h1>

            {/* 自作したテーブル部品に、配列データを丸ごと渡すだけ！ */}
            <UserTable users={usersData} />
        </main>
    );
}