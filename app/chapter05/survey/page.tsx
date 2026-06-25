"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

export default function SurveyPage() {
    // ラジオボタン用のState（初期値は "email"）
    const [contactMethod, setContactMethod] = useState<string>("email");
    // チェックボックス用のState（初期値は false = 未チェック）
    const [agreed, setAgreed] = useState<boolean>(false);

    // 送信ボタンを押した時の処理
    const handleSubmit = () => {
        alert(`連絡方法: ${contactMethod}\n規約同意: ${agreed ? "はい" : "いいえ"}`);
    };

    return (
        <div className="p-8 max-w-sm mx-auto space-y-8">
            <h2 className="text-2xl font-bold">アンケートフォーム</h2>

            {/* ラジオボタンのセクション */}
            <div className="space-y-3">
                <Label className="text-base">希望する連絡方法</Label>
                {/* RadioGroup全体でStateを管理する */}
                <RadioGroup value={contactMethod} onValueChange={setContactMethod}>

                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="email" id="email" />
                        <Label htmlFor="email" className="cursor-pointer">メール</Label>
                    </div>

                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="phone" id="phone" />
                        <Label htmlFor="phone" className="cursor-pointer">電話</Label>
                    </div>

                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="post" id="post" />
                        <Label htmlFor="post" className="cursor-pointer">郵送</Label>
                    </div>

                </RadioGroup>
            </div>

            {/* チェックボックスのセクション */}
            <div className="flex items-center space-x-2 p-4 bg-muted rounded-md">
                {/* チェックボックスは onCheckedChange を使う */}
                <Checkbox
                    id="terms"
                    checked={agreed}
                    onCheckedChange={(checked) => setAgreed(checked as boolean)}
                />
                <Label htmlFor="terms" className="cursor-pointer">
                    利用規約に同意する
                </Label>
            </div>

            {/* 送信ボタン(規約に同意していない時はdisabledで押せなくする） */}
            <Button
                onClick={handleSubmit}
                disabled={!agreed}
                className="w-full"
            >
                送信する
            </Button>

        </div>
    );
}