"use client";
import RadioGroupInput from "@/components/practice/RadioGroupInput";
import CheckboxGroupInput from "@/components/practice/CheckBoxGroupInput";
import { useState } from "react";

export default function FormPracticePage() {
    const [hobbies, setHobbies] = useState<string[]>([]);

    // チェックボックスに渡す選択肢のデータ
    const hobbyOptions = [
        { value: "reading", label: "読書" },
        { value: "sports", label: "スポーツ" },
        { value: "music", label: "音楽鑑賞" },
    ];

    const [sexMethod, setSexMethod] = useState("male");

    // ラジオボタンに渡す「選択肢」のデータ
    const sexOptions = [
        { value: "male", label: "男性" },
        { value: "female", label: "女性" },
    ];

    return (
        <main>
            <h1 className="text-xl font-bold mb-4 border-b pb-2">プロフィール入力</h1>
            <form>
                <input type="text" name="name" value="名前"></input>
            </form>

            {/* 性別を選ぶラジオボタンを配置 */}
            <RadioGroupInput
                label="性別"
                name="contact" // HTMLとしてグループ化するための名前（任意の英数字）
                options={sexOptions}
                value={sexMethod}
                onChange={(newValue) => setSexMethod(newValue)}
            />
        </main>
    );
}