"use client";
import CheckboxGroupInput from "@/components/practice/CheckBoxGroupInput";
import { useState } from "react";

export default function CheckboxSamplePage() {
    // 選択された複数の値を記憶するState
    // 初期値は空の配列([])にし、TypeScriptに文字列の配列(string[])であることを明示する
    const [hobbies, setHobbies] = useState<string[]>([]);

    // チェックボックスに渡す選択肢のデータ
    const hobbyOptions = [
        { value: "reading", label: "読書" },
        { value: "sports", label: "スポーツ" },
        { value: "music", label: "音楽鑑賞" },
    ];

    return (
        <main className="p-4 max-w-sm mx-auto mt-10 border rounded shadow-sm bg-white">
            <h1 className="text-xl font-bold mb-4 border-b pb-2">チェックボックスの基本</h1>

            {/* 自作したチェックボックス部品を配置 */}
            <CheckboxGroupInput
                label="趣味（複数選択可）"
                options={hobbyOptions}
                values={hobbies}
                onChange={(newValues) => setHobbies(newValues)}
            />

            <div className="mt-6 p-4 bg-gray-50 rounded border">
                <p className="text-gray-700 font-bold mb-2">現在のStateの値（配列）：</p>

                {/* 配列の中身を、カンマ(,)区切りの文字列にして表示する */}
                <p className="text-blue-600 font-bold">
                    {hobbies.length > 0 ? hobbies.join(", ") : "未選択"}
                </p>
            </div>
        </main>
    );
}