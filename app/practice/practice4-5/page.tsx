"use client";
import RadioGroupInput from "@/components/practice/RadioGroupInput";
import { useState } from "react";


export default function RadioSamplePage() {
    // 選択された値を記憶するState（初期値は "email" に設定）
    const [contactMethod, setContactMethod] = useState("email");

    // ラジオボタンに渡す「選択肢」のデータ
    const contactOptions = [
        { value: "email", label: "メール" },
        { value: "phone", label: "電話" },
        { value: "post", label: "郵送" },
    ];

    return (
        <main className="p-4 max-w-sm mx-auto mt-10 border rounded shadow-sm bg-white">
            <h1 className="text-xl font-bold mb-4 border-b pb-2">ラジオボタンの基本</h1>

            {/* 自作したラジオボタン部品を配置 */}
            <RadioGroupInput
                label="希望する連絡方法"
                name="contact" // HTMLとしてグループ化するための名前（任意の英数字）
                options={contactOptions}
                value={contactMethod}
                onChange={(newValue) => setContactMethod(newValue)}
            />

            <div className="mt-6 p-4 bg-gray-50 rounded border">
                <p className="text-gray-700 font-bold">
                    現在のStateの値：
                    <span className="text-blue-600 ml-2">{contactMethod}</span>
                </p>
            </div>
        </main>
    );
}